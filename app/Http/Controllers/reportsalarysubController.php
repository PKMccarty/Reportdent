<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Opitemrece;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Exports\Exportsaralysub;
use Maatwebsite\Excel\Facades\Excel;
class reportsalarysubController extends Controller
{
    //
    public function reportsalarysub(Request $request)
    {
        $request->validate([
            'pickerreportsaralysubend' => 'required|date|after_or_equal:pickerreportsaralysubstart',
        ]);
        try {
            $pickerStart = $request->input('pickerreportsaralysubstart');
            $pickerEnd = $request->input('pickerreportsaralysubend');

            $report = Opitemrece::select(
                'opitemrece.dep_code',
                'pttype.pcode as type',
                DB::raw('SUM(opitemrece.unitprice) as salary'),
            )
                ->join('dttm', 'opitemrece.icode', '=', 'dttm.icode')
                ->join('icd10tm_operation', 'dttm.icd10tm_operation_code', '=', 'icd10tm_operation.icd10tm_operation_code')
                ->join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
                ->whereIn('opitemrece.dep_code', ['075'])
                ->whereIn('pttype.pcode', ['UC', 'A2', 'A1'])
                ->whereBetween('opitemrece.vstdate', [$pickerStart, $pickerEnd])
                ->groupBy('opitemrece.dep_code', 'pttype.pcode')
                ->orderBy('opitemrece.dep_code')
                ->orderBy('pttype.pcode')
                ->get();


            $report2 = Opitemrece::select(
                DB::raw('SUM(SUM(opitemrece.unitprice)) OVER () as salaryall'),
                DB::raw('SUM(COUNT(opitemrece.vn)) OVER () as countpeople')
            )->join('dttm', 'opitemrece.icode', '=', 'dttm.icode')
                ->join('icd10tm_operation', 'dttm.icd10tm_operation_code', '=', 'icd10tm_operation.icd10tm_operation_code')
                ->join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
                ->whereIn('opitemrece.dep_code', ['075'])
                ->whereIn('pttype.pcode', ['UC', 'A2', 'A1'])
                ->whereBetween('opitemrece.vstdate', [$pickerStart, $pickerEnd])
                ->groupBy('opitemrece.dep_code', 'pttype.pcode')
                ->orderBy('opitemrece.dep_code')
                ->orderBy('pttype.pcode')
                ->first();
                session(['header' => 'รายงานสรุปรายได้']);
                session(['headername' => 'ทันตกรรม โรงพยาบาลชัยภูมิ 2']);
                return view('main.reportsalarysub', compact('report','report2','pickerStart','pickerEnd'));
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
    public function exportsalarysub(Request $request)
    {
        
        $request->validate([
            'pickerexportsaralysubend' => 'required|date|after_or_equal:pickerexportsaralysubstart',
        ]);
        
        try {
            $pickerStart = $request->input('pickerexportsaralysubstart');
            $pickerEnd = $request->input('pickerexportsaralysubend');
            $export = new Exportsaralysub($pickerStart, $pickerEnd);
            return Excel::download($export, 'export_salarysub.xlsx');
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
}