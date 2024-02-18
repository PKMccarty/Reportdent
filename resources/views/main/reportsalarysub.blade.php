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
            <div class="col-xl-6">
                <div class="card mt-3">
                    <div class="card-header">
                        <h5>รายงานรายได้ระหว่างวันที่ {{ \Carbon\Carbon::parse($pickerStart)->addYears(543)->format('d-m-Y') }} ถึง {{ \Carbon\Carbon::parse($pickerEnd)->addYears(543)->format('d-m-Y') }}</h5><br>
                        <hr>
                        <h5>{{session('headername')}}</h5>                 
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="text-center">
                                    <th class="text-primary">#</th>
                                    <th class="text-primary">หน่วยงาน</th>
                                    <th class="text-primary">สิทธิ</th>
                                    <th class="text-primary">รายได้</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($report as $key => $item)
                                    <tr>
                                        <td class="text-center">{{ $loop->iteration }}</td>
                                        <td>
                                            @if ($item->dep_code == '111')
                                                {{ __('ทันตกรรม') }}
                                            @elseif ($item->dep_code == '075')
                                                {{ __('ทันตกรรม โรงพยาบาลชัยภูมิ 2') }}
                                            @endif
                                        </td>
                                        <td>
                                            {{ $item->type }}
                                            @if ($item->type == 'A1')
                                                {{ __('ชำระเงินเอง') }}
                                            @elseif($item->type == 'A2')
                                                {{ __('สิทธิข้าราชการ') }}
                                            @elseif($item->type == 'UC')
                                                {{ __('สิทธิประกันสังคม') }}
                                            @endif
                                        </td>
                                        <td>{{ number_format($item->salary, 2) . ' บาท' }}</td>
                                    </tr>
                                @endforeach
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>รายได้ทั้งหมด</td>
                                    <td>{{ number_format($report2->salaryall, 2) . ' บาท' }}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>จำนวนผู้มาใช้บริการ</td>
                                    <td>{{ $report2->countpeople.' คน'}}</td>
                                </tr>
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
                                <h5>Export Report รายงานรายได้</h5>
                            </div>
                            <div class="card-body text-center">
                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#Modalexportsalarysub">ดึงรายงาน</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Modalexportsalarysub" class="modal fade" tabindex="-1" role="dialog"
        aria-labelledby="ModalexportsalarysubLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ModalexportsalarysubLabel">Export Excel รายงานสรุปรายได้</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <form id="exportsalarysub" action="{{ route('exportsalarysub') }}" method="post">
                        @csrf
                        <div class="row">
                            <div class="col-xl-12 mt-3">
                                <label for="pickerexportsaralysubstart">วันที่</label>
                                <input type="text" class="form-control" id="pickerexportsaralysubstart"
                                    name="pickerexportsaralysubstart" placeholder="xxxx/xx/xx" readonly required>
                            </div>
                            <div class="col-xl-12 mt-3">
                                <label for="pickerexportsaralysubend">ถึงวันที่</label>
                                <input type="text" class="form-control" id="pickerexportsaralysubend"
                                    name="pickerexportsaralysubend" placeholder="xxxx/xx/xx" readonly required>
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
@error('pickerexportsaralysubend')
    <div id="pickerexportsub"></div>
@enderror