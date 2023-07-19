<div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
    <div class="sidebar-brand d-none d-md-flex">
        <img src="{{ asset('assets/panel/images/biscuits.png') }}" width="35px" />&nbsp;<span>Petitfour Dashboard</span>
    </div>
    <ul class="sidebar-nav" data-coreui="navigation" data-simplebar="init">
        <div class="simplebar-wrapper" style="margin: 0px;">
            <div class="simplebar-height-auto-observer-wrapper">
                <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask">
                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                    <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content"
                        style="height: 100%; overflow: hidden;">
                        <div class="simplebar-content" style="padding: 0px;">
                            <li class="nav-item">
                                <a class="nav-link {{ strpos(Request::url(), '/index') ? 'active' : '' }}"
                                    href="{{ route('dashboard.index') }}">
                                    <i class="nav-icon fas fa-tachometer-alt"></i> Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{ strpos(Request::url(), '/views') ? 'active' : '' }}"
                                    href="{{ route('dashboard.views') }}">
                                    <i class="nav-icon fas fa-external-link-square-alt"></i> Views
                                </a>
                            </li>
                            <li class="nav-title mt-0">Basics</li>
                            <li class="nav-group">
                                <a class="nav-link nav-group-toggle {{ strpos(Request::url(), 'categories') ? 'active' : '' }}"
                                    href="#">
                                    <i class="fas fa-sitemap nav-icon"></i> Categories
                                </a>
                                <ul class="nav-group-items">
                                    <li class="nav-item"><a class="nav-link" href="{{ route('categories.index') }}">
                                            <i class="fas fa-sitemap nav-icon"></i> Categories
                                        </a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link create-btn" href="#categories"
                                            data-url="{{ route('categories.create') }}">
                                            <i class="fas nav-icon fa-plus"></i> Add Category
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-group">
                                <a class="nav-link nav-group-toggle {{ strpos(Request::url(), 'skills') ? 'active' : '' }}"
                                    href="#">
                                    <i class="nav-icon fas fa-fill-drip"></i> Skills
                                </a>
                                <ul class="nav-group-items">
                                    <li class="nav-item"><a class="nav-link" href="{{ route('skills.index') }}">
                                            <i class="nav-icon fas fa-fill-drip"></i> Skills
                                        </a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link create-btn" href="#skills"
                                            data-url="{{ route('skills.create') }}">
                                            <i class="fas nav-icon fa-plus"></i> Add Skill
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-group">
                                <a class="nav-link nav-group-toggle {{ strpos(Request::url(), 'experiences') ? 'active' : '' }}"
                                    href="#">
                                    <i class="fas nav-icon fa-briefcase"></i> Experiences
                                </a>
                                <ul class="nav-group-items">
                                    <li class="nav-item"><a class="nav-link" href="{{ route('experiences.index') }}">
                                            <i class="fas nav-icon fa-briefcase"></i> Experiences
                                        </a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link create-btn" href="#experience"
                                            data-url="{{ route('experiences.create') }}">
                                            <i class="fas nav-icon fa-plus"></i> Add Experience
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-group">
                                <a class="nav-link nav-group-toggle {{ strpos(Request::url(), 'projects') ? 'active' : '' }}"
                                    href="#">
                                    <i class="fas nav-icon fa-laptop-code"></i> Projects
                                </a>
                                <ul class="nav-group-items">
                                    <li class="nav-item"><a class="nav-link" href="{{ route('projects.index') }}">
                                            <i class="fas nav-icon fa-laptop-code"></i> Projects
                                        </a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link create-btn" href="#projects"
                                            data-url="{{ route('projects.create') }}">
                                            <i class="fas nav-icon fa-plus"></i> Add Project
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-group">
                                <a class="nav-link nav-group-toggle {{ strpos(Request::url(), 'blogs') ? 'active' : '' }}"
                                    href="#">
                                    <i class="fas nav-icon fa-rss"></i> Blogs
                                </a>
                                <ul class="nav-group-items">
                                    <li class="nav-item"><a class="nav-link" href="{{ route('blogs.index') }}">
                                            <i class="fas nav-icon fa-rss"></i> Blogs
                                        </a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link create-btn" href="#blogs"
                                            data-url="{{ route('blogs.create') }}">
                                            <i class="fas nav-icon fa-plus"></i> Add Blog
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-title">Configuration</li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('config.user') }}">
                                    <i class="fas fa-user-cog nav-icon"></i> User
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('config.system') }}">
                                    <i class="nav-icon fas fa-pencil-ruler"></i> System
                                </a>
                            </li>
                            <li class="nav-title">Trackers</li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('contacts.index') }}">
                                    <i class="nav-icon fas fa-inbox"></i> Connect Messages
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="simplebar-placeholder" style="width: 256px; height: 509px;"></div>
        </div>
    </ul>
    <button class="sidebar-toggler" type="button" data-coreui-toggle="unfoldable"></button>
</div>
