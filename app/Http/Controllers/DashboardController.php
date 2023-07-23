<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Experience;
use App\Models\Project;
use App\Models\Skill;
use App\Models\ViewType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Yajra\DataTables\Facades\DataTables;

class DashboardController extends Controller {
    private $types;

    public function __construct() {
        $this->types = ['Out-coming', 'Resume', 'Linked In', 'Facebook', 'Instagram', 'Github'];
    }
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

    public function views(Request $request) {
        $viewTypes = ViewType::select("ip", "type", DB::raw("COUNT(*) as counter"))
            ->groupBy("type")
            ->get();
        $viewTypes->transform(function ($viewType) {
            $viewType->created_at = ViewType::where("type", $viewType->type)->latest()->first()->created_at;
            $viewType->count_group_by_ip = count(ViewType::select(DB::raw('COUNT(*) as count'))->where('type', $viewType->type)->groupBy('ip')->get());

            $viewType->type = $this->types[$viewType->type];
            return $viewType;
        });


        return view('panel.dashboard.views', compact('viewTypes'));
    }
}
