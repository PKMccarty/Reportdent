<?php

namespace App\Http\Controllers;

use App\Models\Ovsts;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Exports\Exportappoint;
use Maatwebsite\Excel\Facades\Excel;

class reportappointController extends Controller
{
    //
    public function exportappoint(Request $request)
    {
        $request->validate([
            'pickerend' => 'required|date|after_or_equal:pickerstart',
        ]);
        try {

            $pickerStart = $request->input('pickerstart');
            $pickerEnd = $request->input('pickerend');
            $export = new Exportappoint($pickerStart, $pickerEnd);
            return Excel::download($export, 'รายงานผู้ป่วย_Visit_OPD.xlsx');
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
    public function reportappoint(Request $request)
    {
        $request->validate([
            'pickerreportend' => 'required|date|after_or_equal:pickerreportstart',
        ]);
        try {

            $pickerStart = $request->input('pickerreportstart');
            $pickerEnd = $request->input('pickerreportend');
            $report = Ovsts::join('kskdepartment', 'ovst.main_dep', '=', 'kskdepartment.depcode')
                ->whereIn('ovst.main_dep', ['111', '075'])
                ->whereBetween('ovst.vstdate', [$pickerStart, $pickerEnd])
                ->groupBy('kskdepartment.department')
                ->orderBy('ovst.vstdate')
                ->selectRaw('COUNT(ovst.vn) as count, kskdepartment.department')
                ->get();
                session(['header' => 'รายงานการนัดผู้ป่วย']);
                return view('main.reportappoint', compact('report','pickerStart','pickerEnd'));
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->getMessage());
        }
    }
}
