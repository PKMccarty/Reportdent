<?php

namespace App\Exports;

use App\Models\Opitemrece;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;

class Exportsaralysub implements FromCollection, WithHeadings, WithTitle
{
    private $pickerStart;
    private $pickerEnd;
    private $export2;
    public function __construct($pickerStart, $pickerEnd)
    {
        $this->pickerStart = $pickerStart;
        $this->pickerEnd = $pickerEnd;
        $this->export2 = $this->getExport2();
    }
    public function collection()
    {
        $export = Opitemrece::select(
            'opitemrece.dep_code',
            'pttype.name as type',
            DB::raw('SUM(opitemrece.unitprice) as salary'),
            DB::raw('COUNT(opitemrece.vn) as salary2')
        )
            ->join('dttm', 'opitemrece.icode', '=', 'dttm.icode')
            ->join('icd10tm_operation', 'dttm.icd10tm_operation_code', '=', 'icd10tm_operation.icd10tm_operation_code')
            ->join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
            ->whereIn('opitemrece.dep_code', ['075'])
            ->whereBetween('opitemrece.vstdate', [$this->pickerStart, $this->pickerEnd])
            ->groupBy('opitemrece.dep_code', 'pttype.pcode','pttype.name')
            ->orderBy('opitemrece.dep_code')
            ->orderBy('pttype.pcode')
            ->get();
        $export = $export->map(function ($item) {
            if ($item->dep_code === '111') {
                $item->dep_code = 'ทันตกรรม โรงพยาบาลชัยภูมิ';
            }
            return $item;
        });
        return collect($export->toArray());
    }
    public function title(): string
    {
        return 'Report รายงานสรุปรายได้ ทันตกรรมโรงพยาบาลชัยภูมิ 2';
    }
    protected function getExport2()
    {
        $export2 = Opitemrece::select(
            DB::raw('SUM(SUM(opitemrece.unitprice)) OVER () as salaryall'),
            DB::raw('SUM(COUNT(opitemrece.vn)) OVER () as countpeople')
        )->join('dttm', 'opitemrece.icode', '=', 'dttm.icode')
            ->join('icd10tm_operation', 'dttm.icd10tm_operation_code', '=', 'icd10tm_operation.icd10tm_operation_code')
            ->join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
            ->whereIn('opitemrece.dep_code', ['075'])
            ->whereBetween('opitemrece.vstdate', [$this->pickerStart, $this->pickerEnd])
            ->groupBy('opitemrece.dep_code', 'pttype.pcode')
            ->orderBy('opitemrece.dep_code')
            ->orderBy('pttype.pcode')
            ->get();

        return $export2;
    }
    public function headings(): array
    {
        $salaryAll = $this->export2->first()->salaryall;
        $countpeople = $this->export2->first()->countpeople;
        return [
            ['รายงานสรุปรายได้ ทันตกรรมโรงพยาบาลชัยภูมิ 2 ระหว่างวันที่ ' . $this->pickerStart . ' ถึง ' . $this->pickerEnd],
            ['รายได้รวมทั้งหมด', $salaryAll],
            ['จำนวนผู้เข้ารับบริการทั้งหมด', $countpeople],
            [
                'หน่วยงาน',
                'สิทธิ',
                'รายได้',
                'จำนวนคนไข้',
            ]
        ];
    }
}
