<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use \DataTables;

class SkillController extends Controller {
    public function index() {
        if (request()->ajax()) {
            $skills = Skill::all();
            return DataTables::of($skills)
                // ->rawColumns(['branch', 'related_products', 'action'])
                ->make(true);
        }

        return view("panel.skills.index");
    }

    public function show($id) {
        $skill = Skill::findOrFail($id);
        return view('skills.show', compact('skill'));
    }

    public function create() {
        return view('skills.editor');
    }

    public function store(Request $request) {
        $skill = new Skill();
        $skill->name = $request->input('name');
        $skill->category_id = $request->input('category_id');
        $skill->type = $request->input('type');
        $skill->priority = $request->input('priority');
        $skill->icon = $request->input('icon');
        $skill->start_date = $request->input('start_date');
        $skill->save();

        return redirect()->route('skills.index')->with('success', 'Skill created successfully.');
    }

    public function edit($id) {
        $skill = Skill::findOrFail($id);
        return view('skills.editor', compact('skill'));
    }

    public function update(Request $request, $id) {
        $skill = Skill::findOrFail($id);
        $skill->name = $request->input('name');
        $skill->category_id = $request->input('category_id');
        $skill->type = $request->input('type');
        $skill->priority = $request->input('priority');
        $skill->icon = $request->input('icon');
        $skill->start_date = $request->input('start_date');
        $skill->save();

        return redirect()->route('skills.index')->with('success', 'Skill updated successfully.');
    }

    public function destroy($id) {
        $skill = Skill::findOrFail($id);
        $skill->delete();

        return redirect()->route('skills.index')->with('success', 'Skill deleted successfully.');
    }
}
