<style>
    .actionn:hover {
        cursor: pointer;
    }
</style>
<div class="row">
    <div class="col-xl-12">
        <div class="card">
            <div class="card-header">
                <h5>{{ __('รายงานสรุปรายได้ ประจำวัน ทันตกรรมโรงพยาบาลชัยภูมิ 2') }}</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4 col-xl-4">
                        <div class="card table-card widget-primary-card bg-c-blue">
                            <div class="row-table">
                                <div class="col-sm-3 card-body-big">
                                    <i class="feather icon-star-on"></i>
                                </div>
                                <div class="col-sm-9">
                                    <h4>{{ number_format($static2->sumsalary ?? 0, 2) . __(' บาท') }}
                                    </h4>
                                    <h6>{{ __(' รายได้รวมทั้งหมด') }}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-4">
                        <div class="card table-card widget-purple-card bg-c-info">
                            <div class="row-table">
                                <div class="col-sm-3 card-body-big">
                                    <i class="fas fa-trophy"></i>
                                </div>
                                <div class="col-sm-9">
                                    <h4>{{ $static2->sumappoint ?? 0 . __(' คน') }}</h4>
                                    <h6>{{ __('จำนวนคนเข้ารับบริการ') }}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xl-4">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="card">
                                    <div class="card-body p-0">
                                        <div class="row d-flex align-items-center m-0">
                                            <div class="col-6 text-center bg-c-yellow p-0 actionn">
                                                <a data-toggle="modal" data-target="#Modalexportsalarysub">
                                                    <div style="padding:20px 25px;">
                                                        <p class="mt-2 mb-0 text-white f-w-400">Export รายงานสรุปรายได้
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-6 text-center bg-warning p-0 actionn">
                                                <a data-toggle="modal" data-target="#Modalreportsalarysub">
                                                    <div style="padding:20px 25px;">
                                                        <p class="mt-2 mb-0 text-white f-w-400">Report รายงานสรุปรายได้
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    @forelse ($salarymain2 as $item)
                        <div class="col-xl-4 col-md-12">
                            <div class="card proj-t-card">
                                <div class="card-body" style="height: 200px;">
                                    <div class="row align-items-center m-b-30">
                                        <div class="col-auto">
                                            <i class="far fa-calendar-check text-c-purple f-30"></i>
                                        </div>
                                        <div class="col p-l-0 mt-2">
                                            <h6 class="m-b-0 text-c-purple">สิทธิ</h6>
                                            <h6 class="m-b-5">{{$item->name}}</h6>
                                        </div>
                                    </div>
                                    <div class="row align-items-center text-center">
                                        <div class="col-5">
                                            <p class="m-b-0">{{__('เมื่อวาน: ').number_format($item->salary_yesterday ?? 0,2).__(' บาท')}}</p>
                                        </div>
                                        <div class="col-1"><i class="fas fa-exchange-alt text-c-purple f-18"></i></div>
                                        <div class="col-5">
                                            <p class="m-b-0">{{__('วันนี้: ').number_format($item->salary_today ?? 0,2).__(' บาท')}}</p>
                                        </div>
                                    </div>
                                    <h6 class="pt-badge bg-c-purple">{{$item->sumappoint_today.__(' คน')}}</h6>
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="col-xl-4 col-md-12">
                            <div class="card proj-t-card">
                                <div class="card-body">
                                    <div class="row align-items-center m-b-30">
                                        <div class="col-auto">
                                            <i class="far fa-calendar-check text-c-blue f-30"></i>
                                        </div>
                                        <div class="col p-l-0">
                                            <h6 class="m-b-5">Ticket Answered</h6>
                                            <h6 class="m-b-0 text-c-blue">Live Update</h6>
                                        </div>
                                    </div>
                                    <div class="row align-items-center text-center">
                                        <div class="col">
                                            <h6 class="m-b-0">327</h6>
                                        </div>
                                        <div class="col"><i class="fas fa-exchange-alt text-c-blue f-18"></i></div>
                                        <div class="col">
                                            <h6 class="m-b-0">10 Days</h6>
                                        </div>
                                    </div>
                                    <h6 class="pt-badge bg-c-blue">53%</h6>
                                </div>
                            </div>
                        </div>
                    @endforelse
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
<div id="Modalreportsalarysub" class="modal fade" tabindex="-1" role="dialog"
    aria-labelledby="ModalreportsalarysubLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalreportsalarysubLabel">Report รายงานสรุปรายได้</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <form id="reportsalarysub" action="{{ route('reportsalarysub') }}" method="post">
                    @csrf
                    <div class="row">
                        <div class="col-xl-12 mt-3">
                            <label for="pickerreportsaralysubstart">วันที่</label>
                            <input type="text" class="form-control" id="pickerreportsaralysubstart"
                                name="pickerreportsaralysubstart" placeholder="xxxx/xx/xx" readonly required>
                        </div>
                        <div class="col-xl-12 mt-3">
                            <label for="pickerreportsaralysubend">ถึงวันที่</label>
                            <input type="text" class="form-control" id="pickerreportsaralysubend"
                                name="pickerreportsaralysubend" placeholder="xxxx/xx/xx" readonly required>
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
@error('pickerexportsaralysubend')
    <div id="pickerexportsub"></div>
@enderror
@error('pickerreportsaralysubstart')
    <div id="pickerreportsub"></div>
@enderror
