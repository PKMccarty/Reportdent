<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Models\Ovsts;
use App\Models\Oapp;
use App\Models\Opitemrece;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    public function index()
    {
        // ...
        $expirationTimeInMinutes = 5;
        $expirationTime = Carbon::now()->addMinutes($expirationTimeInMinutes);
        $currentDate = Carbon::now();
        $yesterdayDate = Carbon::yesterday();
        $formattedDate = $currentDate->format('Y-m-d');
        $formattedyesterdayDate = $yesterdayDate->format('Y-m-d');

        /* $cacheKey = 'home_data_' . $formattedDate;
        $cachedData = Cache::remember($cacheKey, $expirationTime, function () use ($formattedDate) { */
            $db = Opitemrece::select('opitemrece.dep_code', DB::raw('SUM(opitemrece.unitprice) as รายได้'), 'pt.name', DB::raw('COUNT(DISTINCT opitemrece.vn) as visit_count'))
            ->join('pttype as pt', 'opitemrece.pttype', '=', 'pt.pttype')
            ->whereIn('opitemrece.dep_code', ['075'])
            ->where('opitemrece.vstdate', $formattedDate)
            ->groupBy('opitemrece.dep_code', 'pt.name')
            ->orderBy('opitemrece.dep_code')
            ->get();

            $db2 = Opitemrece::select('opitemrece.dep_code', DB::raw('SUM(opitemrece.unitprice) as รายได้'), 'pt.name', DB::raw('COUNT(DISTINCT opitemrece.vn) as visit_count'))
            ->join('pttype as pt', 'opitemrece.pttype', '=', 'pt.pttype')
            ->whereIn('opitemrece.dep_code', ['111'])
            ->where('opitemrece.vstdate', $formattedDate)
            ->groupBy('opitemrece.dep_code', 'pt.name')
            ->orderBy('opitemrece.dep_code')
            ->get();


            $dbnutcountmain = Oapp::select('kskdepartment.department', DB::raw('count(ovst.vn) as visit_count'))
                ->join('patient', 'patient.hn', '=', 'oapp.hn')
                ->join('clinic', 'clinic.clinic', '=', 'oapp.clinic')
                ->join('doctor', 'doctor.code', '=', 'oapp.doctor')
                ->join('kskdepartment', 'kskdepartment.depcode', '=', 'oapp.depcode')
                ->join('ovst', function($join) {
                    $join->on('ovst.vstdate', '=', 'oapp.nextdate')
                        ->on('ovst.hn', '=', 'oapp.hn');
                })
                ->where('oapp.nextdate','=', $formattedDate)
                ->where('oapp.depcode', '111')
                ->groupBy('kskdepartment.department')
                ->first();

            $dbnutcountsub = Oapp::select('kskdepartment.department', DB::raw('count(ovst.vn) as visit_count'))
                ->join('patient', 'patient.hn', '=', 'oapp.hn')
                ->join('clinic', 'clinic.clinic', '=', 'oapp.clinic')
                ->join('doctor', 'doctor.code', '=', 'oapp.doctor')
                ->join('kskdepartment', 'kskdepartment.depcode', '=', 'oapp.depcode')
                ->join('ovst', function($join) {
                    $join->on('ovst.vstdate', '=', 'oapp.nextdate')
                        ->on('ovst.hn', '=', 'oapp.hn');
                })
                ->where('oapp.nextdate','=', $formattedDate)
                ->where('oapp.depcode', '075')
                ->groupBy('kskdepartment.department')
                ->first();

            $dbnutmain = Oapp::select('oapp.clinic', 'oapp.oapp_id', DB::raw('CONCAT(patient.pname, patient.fname, " ", patient.lname) as ptname'),
            'oapp.doctor', 'clinic.name as clinic_name', 'doctor.name as doctor_name',
            'oapp.hn', 'oapp.vstdate', 'oapp.nextdate', 'oapp.nexttime', 'oapp.note',
            'oapp.vn', 'oapp.depcode', 'oapp.spclty', 'kskdepartment.department')
                ->join('patient', 'patient.hn', '=', 'oapp.hn')
                ->join('clinic', 'clinic.clinic', '=', 'oapp.clinic')
                ->join('doctor', 'doctor.code', '=', 'oapp.doctor')
                ->join('kskdepartment', 'kskdepartment.depcode', '=', 'oapp.depcode')
                ->join('ovst', function($join) {
                    $join->on('ovst.vstdate', '=', 'oapp.nextdate')
                        ->on('ovst.hn', '=', 'oapp.hn');
                })
                ->where('oapp.nextdate','=', $formattedDate)
                ->where('oapp.depcode', '111')
                ->get();

            $dbnutsub = Oapp::select('oapp.clinic', 'oapp.oapp_id', DB::raw('CONCAT(patient.pname, patient.fname, " ", patient.lname) as ptname'),
            'oapp.doctor', 'clinic.name as clinic_name', 'doctor.name as doctor_name',
            'oapp.hn', 'oapp.vstdate', 'oapp.nextdate', 'oapp.nexttime', 'oapp.note',
            'oapp.vn', 'oapp.depcode', 'oapp.spclty', 'kskdepartment.department')
                ->join('patient', 'patient.hn', '=', 'oapp.hn')
                ->join('clinic', 'clinic.clinic', '=', 'oapp.clinic')
                ->join('doctor', 'doctor.code', '=', 'oapp.doctor')
                ->join('kskdepartment', 'kskdepartment.depcode', '=', 'oapp.depcode')
                ->join('ovst', function($join) {
                    $join->on('ovst.vstdate', '=', 'oapp.nextdate')
                        ->on('ovst.hn', '=', 'oapp.hn');
                })
                ->where('oapp.nextdate','=', $formattedDate)
                ->where('oapp.depcode', '075')
                ->get();

                $salarymain = Opitemrece::select(
                    'opitemrece.dep_code',
                    DB::raw("SUM(CASE WHEN opitemrece.vstdate = '".$formattedDate."' THEN opitemrece.unitprice ELSE 0 END) AS salary_today"),
                    DB::raw("SUM(CASE WHEN opitemrece.vstdate = DATE_SUB('".$formattedDate."', INTERVAL 1 DAY) THEN opitemrece.unitprice ELSE 0 END) AS salary_yesterday"),
                    'pttype.name',
                    DB::raw("COUNT(DISTINCT CASE WHEN opitemrece.vstdate = '".$formattedDate."' THEN opitemrece.vn END) AS sumappoint_today"),
                    DB::raw("COUNT(CASE WHEN opitemrece.vstdate = DATE_SUB('".$formattedDate."', INTERVAL 1 DAY) THEN opitemrece.vn END) AS sumappoint_yesterday")
                )
                ->join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
                ->where('opitemrece.dep_code', '111')
                ->whereIn('opitemrece.vstdate', [$formattedDate, DB::raw("DATE_SUB('".$formattedDate."', INTERVAL 1 DAY)")])
                ->groupBy('opitemrece.dep_code', 'pttype.name')
                ->orderBy('opitemrece.dep_code', 'asc')
                ->get();
                $static = Opitemrece::join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
                ->select(
                    'opitemrece.dep_code',
                    DB::raw('SUM(opitemrece.unitprice) AS sumsalary'),
                    DB::raw('COUNT(DISTINCT opitemrece.vn) AS sumappoint'),
                )
                ->where('opitemrece.dep_code', '111')
                ->where('opitemrece.vstdate', $formattedDate)
                ->groupBy('opitemrece.dep_code')
                ->orderBy('opitemrece.dep_code', 'asc')
                ->first();
                
                $salarymain2 = Opitemrece::select(
                    'opitemrece.dep_code',
                    DB::raw("SUM(CASE WHEN opitemrece.vstdate = '".$formattedDate."' THEN opitemrece.unitprice ELSE 0 END) AS salary_today"),
                    DB::raw("SUM(CASE WHEN opitemrece.vstdate = DATE_SUB('".$formattedDate."', INTERVAL 1 DAY) THEN opitemrece.unitprice ELSE 0 END) AS salary_yesterday"),
                    'pttype.name',
                    DB::raw("COUNT(DISTINCT CASE WHEN opitemrece.vstdate = '".$formattedDate."' THEN opitemrece.vn END) AS sumappoint_today"),
                    DB::raw("COUNT(CASE WHEN opitemrece.vstdate = DATE_SUB('".$formattedDate."', INTERVAL 1 DAY) THEN opitemrece.vn END) AS sumappoint_yesterday")
                )
                ->join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
                ->where('opitemrece.dep_code', '075')
                ->whereIn('opitemrece.vstdate', [$formattedDate, DB::raw("DATE_SUB('".$formattedDate."', INTERVAL 1 DAY)")])
                ->groupBy('opitemrece.dep_code', 'pttype.name')
                ->orderBy('opitemrece.dep_code', 'asc')
                ->get();


                $static2 = Opitemrece::join('pttype', 'opitemrece.pttype', '=', 'pttype.pttype')
                ->select(
                    'opitemrece.dep_code',
                    DB::raw('SUM(opitemrece.unitprice) AS sumsalary'),
                    DB::raw('COUNT(DISTINCT opitemrece.vn) AS sumappoint'),
                )
                ->where('opitemrece.dep_code', '075')
                ->where('opitemrece.vstdate', $formattedDate)
                ->groupBy('opitemrece.dep_code')
                ->orderBy('opitemrece.dep_code', 'asc')
                ->first();

                session(['header' => 'หน้าหลัก']);
            return view('home',compact('db','db2','static', 'static2','dbnutcountmain','dbnutcountsub','dbnutmain','dbnutsub','salarymain','salarymain2'));

            /* return compact('db', 'db2', 'db3', 'db4', 'db5', 'db6', 'db7', 'static', 'static2','dbnutcountmain','dbnutcountsub','dbnutmain','dbnutsub'); */
        /* });
        return view('home', $cachedData); */
    }

    
}
