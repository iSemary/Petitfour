<header class="header header-sticky mb-4">
    <div class="container-fluid header-content">
        {{-- <ul class="header-nav d-none d-md-flex">
            <li class="nav-item"><a class="nav-link" href="{{ route('logout') }}">Logout</a></li>
        </ul> --}}
        <button class="header-toggler px-md-0 me-md-3" type="button"
            onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()">
            <i class="fas fa-expand-arrows-alt"></i>
        </button>
        <ul class="header-nav ms-3">
            <li class="nav-item dropdown">
                <a class="nav-link py-0" data-coreui-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                    aria-expanded="false">
                    <div class="avatar avatar-md">
                        <img class="avatar-img" src="assets/img/avatars/8.jpg" alt="user@email.com">
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-end pt-0">
                    <div class="dropdown-header bg-light py-2">
                        <div class="fw-semibold">Account</div>
                    </div>
                    <a class="dropdown-item" href="{{ route('logout') }}">Logout</a>

                    </span>
                </div>
            </li>
        </ul>
    </div>
</header>
