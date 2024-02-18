@php
    use Carbon\Carbon;
    $currentDate = Carbon::now();
    $formattedDate = $currentDate->format('Y-m-d');
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
                        <h5>รายงานรายได้ระหว่างวันที่ {{ \Carbon\Carbon::parse($pickerStart)->addYears(543)->format('d-m-Y') }} ถึง {{ \Carbon\Carbon::parse($pickerEnd)->addYears(543)->format('d-m-Y') }}</h5>                   
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered">
                            @foreach ($report as $item)
                                <tr>
                                    <th class="text-primary">หน่วยงาน</th>
                                    <td>{{ substr($item->department, 4) }}</td>
                                </tr>
                                <tr>
                                    <th class="text-primary">จำนวนนัดผู้ป่วย</th>
                                    <td>{{ $item->count . ' คน' }}</td>
                                </tr>
                            @endforeach
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 mt-3">
                <div class="col-xl">
                    <div class="col-xl">
                        <div class="card">
                            <div class="card-header">
                                <h5>Export Report รายงานนัดผู้ป่วย</h5>
                            </div>
                            <div class="card-body text-center">
                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#Modalexportappoint">ดึงรายงาน</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="Modalexportappoint" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="ModalexportappointLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalexportappointLabel">Export Excel รายงานนัดผู้ป่วย</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <form id="exportappoint" action="{{ route('appointexport') }}" method="post">
                    @csrf
                    <div class="row">
                        <div class="col-xl-12 mt-3">
                            <label for="pickerstart">วันที่</label>
                            <input type="text" class="form-control" id="pickerstart" name="pickerstart"
                                placeholder="xxxx/xx/xx" readonly required>
                        </div>
                        <div class="col-xl-12 mt-3">
                            <label for="pickerend">ถึงวันที่</label>
                            <input type="text" class="form-control" id="pickerend" name="pickerend"
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
