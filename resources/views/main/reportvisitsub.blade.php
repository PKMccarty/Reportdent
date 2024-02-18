@php
    use Carbon\Carbon;
    $currentDate = Carbon::now();
    $yesterday = Carbon::now()->subDay();
@endphp
@extends('layouts.screen')
@section('content')
    <div class="row">
        <div class="col-xl">
            <a class="btn btn-primary" href="{{ route('home') }}">Go Back</a>
        </div>
    </div>
    <div class="container-lg">
        <div class="row">
            <div class="col-xl-8">
                <div class="card mt-3">
                    <div class="card-header">
                        <h5>รายงานนัดผู้ป่วย ทันตกรรม รพ.2 ระหว่างวันที่ {{ \Carbon\Carbon::parse($pickerStart)->addYears(543)->format('d-m-Y') }} ถึง {{ \Carbon\Carbon::parse($pickerEnd)->addYears(543)->format('d-m-Y') }}</h5><br>
                        <hr>
                        <h5>{{session('headername')}}</h5>                 
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-responsive">
                            <thead>
                                <tr class="text-center">
                                    <th class="text-primary">{{__("#")}}</th>
                                    <th class="text-primary">{{__("คลินิก")}}</th>
                                    <th class="text-primary">{{__("HN")}}</th>
                                    <th class="text-primary">{{__("ชื่อ - สกุล")}}</th>
                                    <th class="text-primary">{{__("แพทย์ผู้นัด")}}</th>
                                    <th class="text-primary">{{__("วันที่มา")}}</th>
                                    <th class="text-primary">{{__("วันที่นัด")}}</th>
                                    <th class="text-primary">{{__("เวลา")}}</th>
                                    <th class="text-primary">{{__("หมายเหตุ")}}</th>
                                    						
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($report as $key => $item)
                                    <tr>
                                        <td class="text-center">{{ $loop->iteration }}</td>
                                        <td>{{$item->clinic_name}}</td>
                                        <td>{{$item->hn}}</td>
                                        <td>{{$item->ptname}}</td>
                                        <td>{{$item->doctor_name}}</td>
                                        <td>{{$item->vstdate}}</td>
                                        <td>{{$item->nextdate}}</td>
                                        <td>{{$item->nexttime}}</td>
                                        <td>{{$item->note}}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 mt-3">
                <div class="col-xl">
                    <div class="col-xl">
                        <div class="card">
                            <div class="card-header">
                                <h5>Export รายงานนัดผู้ป่วย ทันตกรรม รพ.2</h5>
                            </div>
                            <div class="card-body text-center">
                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                        data-target="#Modalexportvisitsub">ดึงรายงาน</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Modalexportvisitsub" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="ModalexportvisitsubLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalexportvisitsubLabel">Export Excel รายงานนัดผู้ป่วย ทันตกรรม รพ.2</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <form id="exportvisitsub" action="{{ route('exportvisitsub') }}" method="post">
                    @csrf
                    <div class="row">
                        <div class="col-xl-12 mt-3">
                            <label for="pickerexportvisitssubstart">วันที่</label>
                            <input type="text" class="form-control" id="pickerexportvisitssubstart" name="pickerexportvisitssubstart"
                                placeholder="xxxx/xx/xx" readonly required>
                        </div>
                        <div class="col-xl-12 mt-3">
                            <label for="pickerexportvisitssubend">ถึงวันที่</label>
                            <input type="text" class="form-control" id="pickerexportvisitssubend" name="pickerexportvisitssubend"
                                placeholder="xxxx/xx/xx" readonly required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
                        <input type="submit" class="btn btn-primary" value="ค้นหา">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection
@error('pickerexportvisitssubend')
    <div id="errorexportvisitmain"></div>
@enderror