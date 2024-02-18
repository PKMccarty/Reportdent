<?php

namespace App\Http\Controllers;

use App\Exports\Exportvisitsub;
use Illuminate\Support\Facades\DB;
use App\Models\Oapp;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;

class reportvisitsubController extends Controller
{
    //
    public function exportvisitsub(Request $request)
    {
        $request->validate([
            'pickerexportvisitssubend' => 'required|date|after_or_equal:pickerexportvisitssubstart',
        ]);
        try {

            $pickerStart = $request->input('pickerexportvisitssubstart');
            $pickerEnd = $request->input('pickerexportvisitssubend');
            $export = new Exportvisitsub($pickerStart, $pickerEnd);
            return Excel::download($export, 'รายงานนัดผู้ป่วยทันตกรรม_รพ_2.xlsx');
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
    public function reportvisitsub(Request $request)
    {
        $request->validate([
            'pickerreportvisitssubend' => 'required|date|after_or_equal:pickerreportvisitssubstart',
        ]);
        try {

            $pickerStart = $request->input('pickerreportvisitssubstart');
            $pickerEnd = $request->input('pickerreportvisitssubend');

            $report = Oapp::select('clinic.name as clinic_name','oapp.hn',DB::raw('CONCAT(patient.pname, patient.fname, " ", patient.lname) as ptname'),
            'doctor.name as doctor_name','oapp.vstdate', 'oapp.nextdate', 'oapp.nexttime', 'oapp.note')
               ->join('patient', 'patient.hn', '=', 'oapp.hn')
               ->join('clinic', 'clinic.clinic', '=', 'oapp.clinic')
               ->join('doctor', 'doctor.code', '=', 'oapp.doctor')
               ->join('kskdepartment', 'kskdepartment.depcode', '=', 'oapp.depcode')
               ->join('ovst', function($join) {
                   $join->on('ovst.vstdate', '=', 'oapp.nextdate')
                       ->on('ovst.hn', '=', 'oapp.hn');
               })
               ->whereBetween('oapp.nextdate',[$pickerStart, $pickerEnd])
               ->where('oapp.depcode', '075')
               ->get();
                

            $report2 = Oapp::select('kskdepartment.department', DB::raw('count(ovst.vn) as visit_count'))
                ->join('patient', 'patient.hn', '=', 'oapp.hn')
                ->join('clinic', 'clinic.clinic', '=', 'oapp.clinic')
                ->join('doctor', 'doctor.code', '=', 'oapp.doctor')
                ->join('kskdepartment', 'kskdepartment.depcode', '=', 'oapp.depcode')
                ->join('ovst', function($join) {
                    $join->on('ovst.vstdate', '=', 'oapp.nextdate')
                        ->on('ovst.hn', '=', 'oapp.hn');
                })
                ->whereBetween('oapp.nextdate',[$pickerStart, $pickerEnd])
                ->where('oapp.depcode', '075')
                ->groupBy('kskdepartment.department')
                ->first();

                session(['header' => 'รายงานการนัดผู้ป่วย']);
                return view('main.reportvisitsub', compact('report','report2','pickerStart','pickerEnd'));
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
}