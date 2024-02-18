<?php

namespace App\Exports;

use App\Models\Oapp;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
use Illuminate\Support\Facades\DB;
class Exportvisitmain implements FromCollection, WithHeadings, WithTitle
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
        $export = Oapp::select('clinic.name as clinic_name','oapp.hn',DB::raw('CONCAT(patient.pname, patient.fname, " ", patient.lname) as ptname'),
         'doctor.name as doctor_name','oapp.vstdate', 'oapp.nextdate', 'oapp.nexttime', 'oapp.note')
            ->join('patient', 'patient.hn', '=', 'oapp.hn')
            ->join('clinic', 'clinic.clinic', '=', 'oapp.clinic')
            ->join('doctor', 'doctor.code', '=', 'oapp.doctor')
            ->join('kskdepartment', 'kskdepartment.depcode', '=', 'oapp.depcode')
            ->join('ovst', function($join) {
                $join->on('ovst.vstdate', '=', 'oapp.nextdate')
                    ->on('ovst.hn', '=', 'oapp.hn');
            })
            ->whereBetween('oapp.nextdate',[$this->pickerStart, $this->pickerEnd])
            ->where('oapp.depcode', '111')
            ->get();
        return collect($export->toArray());
    }
    public function title(): string
    {
        return 'Report รายงานนัดผู้ป่วย โรงพยาบาลชัยภูมิ';
    }
    public static function afterSheet(AfterSheet $event)
    {
        $event->sheet->mergeCells('A1:B1');
        $event->sheet->mergeCells('A2:B2');
    }

    public function headings(): array
    {
         return [
            ['รายงานจำนวนนัดผู้ป่วย ทันตกรรม โรงพยาบาลชัยภูมิ ระหว่างวันที่'.$this->pickerStart.' ถึง '.$this->pickerEnd],
            ['คลินิก',
            'HN','ชื่อ - สกุล','แพทย์ผู้นัด','วันที่มา','วันที่นัด','เวลา','หมายเหตุ']
        ];
    }
}