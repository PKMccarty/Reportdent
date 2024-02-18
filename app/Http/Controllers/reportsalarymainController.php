<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Opitemrece;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Exports\Exportsaralymain;
use Maatwebsite\Excel\Facades\Excel;

class reportsalarymainController extends Controller
{
    //
    public function reportsalarymain(Request $request)
    {
        $request->validate([
            'pickerreportsalarymainend' => 'required|date|after_or_equal:pickerreportsalarymainstart',
        ]);
        try {
            $pickerStart = $request->input('pickerreportsalarymainstart');
            $pickerEnd = $request->input('pickerreportsalarymainend');

            $report = Opitemrece::select(
                'opitemrece.dep_code',
                'pttype.pcode as type',
                DB::raw('SUM(opitemrece.unitprice) as salary'),
            )
                ->join('dttm', 'opitemrece.icode', '=', 'dttm.icode')
                ->join('icd10tm_operation', 'dttm.icd10tm_operation_code', '=', 'icd10tm_operation.icd10tm_operation_code')
                ->join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
                ->whereIn('opitemrece.dep_code', ['111'])
                ->whereIn('pttype.pcode', ['UC', 'A2', 'A1'])
                ->whereBetween('opitemrece.vstdate', [$request->input('pickerreportsalarymainstart'), $request->input('pickerreportsalarymainend')])
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
                ->whereIn('opitemrece.dep_code', ['111'])
                ->whereIn('pttype.pcode', ['UC', 'A2', 'A1'])
                ->whereBetween('opitemrece.vstdate', [$request->input('pickerreportsalarymainstart'), $request->input('pickerreportsalarymainend')])
                ->groupBy('opitemrece.dep_code', 'pttype.pcode')
                ->orderBy('opitemrece.dep_code')
                ->orderBy('pttype.pcode')
                ->first();
                session(['header' => 'รายงานสรุปรายได้']);
                session(['headername' => 'ทันตกรรม โรงพยาบาลชัยภูมิ']);
                return view('main.reportsalarymain', compact('report','report2','pickerStart','pickerEnd'));
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
    public function exportsalarymain(Request $request)
    {
        
        $request->validate([
            'pickerexportsalaryend' => 'required|date|after_or_equal:pickerexportsalarystart',
        ]);
        
        try {
            $pickerStart = $request->input('pickerexportsalarystart');
            $pickerEnd = $request->input('pickerexportsalaryend');
            $export = new Exportsaralymain($pickerStart, $pickerEnd);
            return Excel::download($export, 'export_salarymain.xlsx');
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
}
