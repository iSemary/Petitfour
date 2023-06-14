<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Skill;
use Illuminate\Http\Request;
use \DataTables;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller {
    protected $type;
    public function __construct() {
        $this->type = ["Main Category", "Side Category"];
    }
    public function index() {
        if (request()->ajax()) {
            $categories = Category::orderBy("id", "DESC");

            return DataTables::of($categories)
                ->editColumn('type', function ($row) {
                    return $this->type[$row->type];
                })
                ->addColumn('skills_count', function ($row) {
                    return Skill::where('category_id', $row->id)->count();
                })
                ->addColumn('action', function ($row) {
                    $btn = '';
                    $btn .= '<button type="button" data-url="' . route('categories.edit', $row->id) . '" class="btn btn-info btn-sm edit-btn text-white mr-1"><i class="far fa-edit"></i> Edit</button>';
                    $btn .= '<button type="button" data-delete-type="category" data-url="' . route('categories.destroy', $row->id) . '" class="btn btn-danger btn-sm delete-btn text-white mr-1"><i class="fa fa-trash"></i> Delete</button>';
                    return $btn;
                })
                ->rawColumns(['skills_count', 'action'])
                ->make(true);
        }

        return view("panel.categories.index");
    }


    public function create() {
        $categories = Category::all();
        return view('panel.categories.editor', compact("categories"));
    }

    public function store(Request $request) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:categories',
            'type' => 'required',
        ]);
        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        $category = Category::create([
            'name' => $request->input('name'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'type' => $request->input('type'),
            'priority' => $request->input('priority'),
        ]);

        if ($category) {
            return response()->json(['message' => "Category added successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function edit($id) {
        $category = Category::findOrFail($id);
        return view('panel.categories.editor', compact('category'));
    }

    public function update(Request $request, $id) {
        // Validate the input
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:categories,name,' . $id,
            'type' => 'required',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Get the category by ID
        $category = Category::findOrFail($id);


        // Update other category properties
        $category->name = $request->input('name');
        $category->title = $request->input('title');
        $category->description = $request->input('description');
        $category->type = $request->input('type');
        $category->priority = $request->input('priority');
        $category->save();

        if ($category) {
            return response()->json(['message' => "category updated successfully"], 200);
        } else {
            return response()->json(['message' => "Something went wrong"], 400);
        }
    }

    public function destroy($id) {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(['message' => "category deleted successfully"], 200);
    }
}
