<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller {
    public function home() {
        $skills = Skill::count();
        $projects = Project::count();
        $experiences = Experience::count();
        $blogs = Blog::count();
        return view(
            "panel.dashboard.index",
            compact('skills', 'projects', 'experiences', 'blogs')
        );
    }
}
