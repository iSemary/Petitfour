<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Yajra\DataTables\Facades\DataTables;

class ContactController extends Controller {
    public function index() {
        if (request()->ajax()) {
            $messages = ContactMessage::orderBy("id", "DESC");
            return DataTables::of($messages)
                ->addColumn('action', function ($row) {
                    $btn = '';
                    $btn .= '<button type="button" data-url="' . route('contacts.reply', $row->id) . '" class="btn btn-info btn-sm edit-btn text-white mr-1"><i class="fas fa-reply"></i> Reply</button>';
                    return $btn;
                })
                ->rawColumns(['action'])
                ->make(true);
        }
        return view("panel.contact-messages.index");
    }
}
