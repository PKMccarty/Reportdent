@extends('layouts.screen')

@section('content')
    <div class="row justify-content-center">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5>Export Excel รายงานผู้ป่วย Visit OPD ทันตกรรม</h5>
                </div>
                <div class="card-body">
                    <form id="appointexport" action="{{ route('appointexport') }}" method="post">
                        @csrf
                        <div class="row">
                            <div class="col-xl-6 mt-3">
                                <label for="pickerstart">วันที่</label>
                                <input type="text" class="form-control" id="pickerstart"
                                    name="pickerstart" placeholder="xxxx/xx/xx" readonly required>
                            </div>
                            <div class="col-xl-6 mt-3">
                                <label for="pickerend">ถึงวันที่</label>
                                <input type="text" class="form-control" id="pickerend"
                                    name="pickerend" placeholder="xxxx/xx/xx" readonly required>
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
