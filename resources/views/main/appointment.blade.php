<div class="row">
    <div class="col-xl-12">
        <div class="row">
            <div class="col-xl-12">
                <p>ผู้ป่วยใช้บริการประจำวัน ทันตโรงพยาบาลชัยภูมิ</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="row no-gutters">
                    @forelse ($db2 as $item)
                        <div class="col-xl-3 col-md-6">
                            <div class="card ticket-card" style="height: 180px;">
                                <div class="card-body">
                                    <p class="m-b-25 bg-c-blue lbl-card"><i class="fas fa-folder-open m-r-5"></i>
                                        {{ $item->name }}</p>
                                    <div class="text-center">
                                        <h2 class="m-b-0 d-inline-block text-c-blue">{{ $item->visit_count }}</h2>
                                        <p class="m-b-0 d-inline-block">คน</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="col-xl-3 col-md-6">
                            <div class="card ticket-card">
                                <div class="card-body">
                                    <p class="m-b-25 bg-c-blue lbl-card"><i class="fas fa-folder-open m-r-5"></i> Open
                                        Tickets</p>
                                    <div class="text-center">
                                        <h2 class="m-b-0 d-inline-block text-c-blue">128</h2>
                                        <p class="m-b-0 d-inline-block">Tickets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforelse
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <p>ผู้ป่วยใช้บริการประจำวัน ทันตโรงพยาบาลชัยภูมิ 2</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="row no-gutters">
                    @forelse ($db as $item)
                        <div class="col-xl-3 col-md-6">
                            <div class="card ticket-card" style="height: 180px;">
                                <div class="card-body">
                                    <p class="m-b-25 bg-c-purple lbl-card"><i class="fas fa-users m-r-5"></i>
                                        {{ $item->name }}</p>
                                    <div class="text-center">
                                        <h2 class="m-b-0 d-inline-block text-c-purple">{{ $item->visit_count }}</h2>
                                        <p class="m-b-0 d-inline-block">คน</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="col-xl-3 col-md-6">
                            <div class="card ticket-card">
                                <div class="card-body">
                                    <p class="m-b-25 bg-c-purple lbl-card"><i class="fas fa-users m-r-5"></i> New Clients
                                    </p>
                                    <div class="text-center">
                                        <h2 class="m-b-0 d-inline-block text-c-purple">307</h2>
                                        <p class="m-b-0 d-inline-block">Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforelse
                </div>
            </div>
        </div>
    </div>
</div>
