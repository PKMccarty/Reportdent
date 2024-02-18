<?php

namespace App\Exports;

use App\Models\Ovsts;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
class Exportappoint implements FromCollection, WithHeadings, WithTitle
{
    private $pickerStart;
    private $pickerEnd;
    public function __construct($pickerStart, $pickerEnd)
    {
        $this->pickerStart = $pickerStart;
        $this->pickerEnd = $pickerEnd;
    }
    public function collection()
    {
        $export = Ovsts::join('kskdepartment', 'ovst.main_dep', '=', 'kskdepartment.depcode')
            ->whereIn('ovst.main_dep', ['111', '075'])
            ->whereBetween('ovst.vstdate', [$this->pickerStart, $this->pickerEnd])
            ->groupBy('kskdepartment.department')
            ->selectRaw('count(ovst.vn) as count, kskdepartment.department')
            ->orderBy('ovst.vstdate')
            ->get();
        return collect($export->toArray());
    }
    public function title(): string
    {
        return 'Report รายงานจำนวนผู้ป่วย Visit OPD ทันตกรรม';
    }
    public static function afterSheet(AfterSheet $event)
    {
        $event->sheet->mergeCells('A1:B1');
        $event->sheet->mergeCells('A2:B2');
    }

    public function headings(): array
    {
         return [
            ['รายงานจำนวนผู้ป่วย Visit OPD ทันตกรรม ระหว่างวันที่'.$this->pickerStart.' ถึง '.$this->pickerEnd],
            ['จำนวนผู้ใช้บริการ',
            'หน่วยงาน',]
        ];
    }
}
