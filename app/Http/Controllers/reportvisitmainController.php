<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Exports\Exportvisitmain;
use App\Models\Oapp;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;

class reportvisitmainController extends Controller
{
    //
    public function exportvisitmain(Request $request)
    {
        $request->validate([
            'pickerexportvisitsmainend' => 'required|date|after_or_equal:pickerexportvisitsmainstart',
        ]);
        try {

            $pickerStart = $request->input('pickerexportvisitsmainstart');
            $pickerEnd = $request->input('pickerexportvisitsmainend');
            $export = new Exportvisitmain($pickerStart, $pickerEnd);
            return Excel::download($export, 'รายงานนัดผู้ป่วยทันตกรรม.xlsx');
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
    public function reportvisitmain(Request $request)
    {
        $request->validate([
            'pickerreportvisitsmainend' => 'required|date|after_or_equal:pickerreportvisitsmainstart',
        ]);
        try {

            $pickerStart = $request->input('pickerreportvisitsmainstart');
            $pickerEnd = $request->input('pickerreportvisitsmainend');

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
               ->where('oapp.depcode', '111')
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
                ->where('oapp.depcode', '111')
                ->groupBy('kskdepartment.department')
                ->first();

                session(['header' => 'รายงานการนัดผู้ป่วย']);
                return view('main.reportvisitmain', compact('report','report2','pickerStart','pickerEnd'));
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
}