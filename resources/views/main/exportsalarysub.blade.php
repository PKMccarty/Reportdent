@extends('layouts.screen')

@section('content')
    <div class="row justify-content-center">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5>Export Excel รายงานสรุปรายได้ ทันตกรรม รพ.2</h5>
                </div>
                <div class="card-body">
                    <form id="exportsalarysub" action="{{ route('exportsalarysub') }}" method="post">
                        @csrf
                        <div class="row">
                            <div class="col-xl-6 mt-3">
                                <label for="pickerexportsaralysubstart">วันที่</label>
                                <input type="text" class="form-control" id="pickerexportsaralysubstart"
                                    name="pickerexportsaralysubstart" placeholder="xxxx/xx/xx" readonly required>
                            </div>
                            <div class="col-xl-6 mt-3">
                                <label for="pickerexportsaralysubend">ถึงวันที่</label>
                                <input type="text" class="form-control" id="pickerexportsaralysubend"
                                    name="pickerexportsaralysubend" placeholder="xxxx/xx/xx" readonly required>
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
