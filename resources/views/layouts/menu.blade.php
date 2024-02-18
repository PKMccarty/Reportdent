<nav class="pcoded-navbar menupos-fixed menu-light brand-blue ">
    <div class="navbar-wrapper ">
        <div class="navbar-brand header-logo">
            <a href="{{ route('home') }}" class="b-brand text-white">
                ทันตกรรม
            </a>
            <a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
        </div>
        <div class="navbar-content scroll-div">
            <ul class="nav pcoded-inner-navbar">
                <li class="nav-item pcoded-menu-caption">
                    <label>Menu</label>
                </li>
                <li class="nav-item">
                    <a href="{{ route('home') }}" class="nav-link"><span class="pcoded-micon"><i
                                class="feather icon-home"></i></span><span class="pcoded-mtext">หน้าหลัก</span></a>
                </li>
                <li class="nav-item pcoded-menu-caption">
                    <label>Export</label>
                </li>
                <li class="nav-item pcoded-hasmenu">
                    <a href="#!" class="nav-link"><span class="pcoded-micon"><i
                                class="feather icon-box"></i></span><span class="pcoded-mtext">Export Report</span></a>
                    <ul class="pcoded-submenu" style="display: none;">
                        <li class=""><a href="{{route('exportvisitopd')}}">Export รายงานผู้ป่วย Visit OPD ทันตกรรม</a></li>
                        <li class=""><a href="{{route('exportappointmain')}}">Export รายงานนัดผู้ป่วย ทันตกรรม</a></li>
                        <li class=""><a href="{{route('exportappointsub')}}">Export รายงานนัดผู้ป่วย ทันตกรรม รพ.2</a></li>
                        <li class=""><a href="{{route('exportsalarymain')}}">Export รายงานสรุปรายได้ ทันตกรรม</a></li>
                        <li class=""><a href="{{route('exportsalarysub')}}">Export รายงานสรุปรายได้ ทันตกรรม รพ.2</a></li>
                    </ul>
                </li>
                <li class="nav-item pcoded-menu-caption">
                    <label>Report</label>
                </li>
                <li class="nav-item pcoded-hasmenu">
                    <a href="#!" class="nav-link"><span class="pcoded-micon"><i
                                class="feather icon-box"></i></span><span class="pcoded-mtext">Report ออนไลน์</span></a>
                    <ul class="pcoded-submenu" style="display: none;">
                        <li class=""><a href="{{route('reportvisitopdsearch')}}">Report รายงานผู้ป่วย Visit OPD ทันตกรรม</a></li>
                        <li class=""><a href="{{route('reportappointmainsearch')}}">Report รายงานนัดผู้ป่วย ทันตกรรม</a></li>
                        <li class=""><a href="{{route('reportappointsubsearch')}}">Report รายงานนัดผู้ป่วย ทันตกรรม รพ.2</a></li>
                        <li class=""><a href="{{route('reportsalarymainsearch')}}">Report รายงานสรุปรายได้ ทันตกรรม</a></li>
                        <li class=""><a href="{{route('reportsalarysubsearch')}}">Report รายงานสรุปรายได้ ทันตกรรม รพ.2</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>