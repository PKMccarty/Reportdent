@extends('layouts.screen')

@section('content')
    <div class="row justify-content-center">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5>Export Excel รายงานนัดผู้ป่วย ทันตกรรม</h5>
                </div>
                <div class="card-body">
                    <form id="exportvisitmain" action="{{ route('exportvisitmain') }}" method="post">
                        @csrf
                        <div class="row">
                            <div class="col-xl-6 mt-3">
                                <label for="pickerexportvisitsmainstart">วันที่</label>
                                <input type="text" class="form-control" id="pickerexportvisitsmainstart"
                                    name="pickerexportvisitsmainstart" placeholder="xxxx/xx/xx" readonly required>
                            </div>
                            <div class="col-xl-6 mt-3">
                                <label for="pickerexportvisitsmainend">ถึงวันที่</label>
                                <input type="text" class="form-control" id="pickerexportvisitsmainend"
                                    name="pickerexportvisitsmainend" placeholder="xxxx/xx/xx" readonly required>
                            </div>
                        </div>
                        <div class="modal-footer mt-5">
                            <input type="submit" class="btn btn-primary" value="ดึงข้อมูล">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
