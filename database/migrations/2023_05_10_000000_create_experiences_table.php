<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExperiencesTable extends Migration {
    public function up() {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('company_logo');
            $table->string('company_location');
            $table->string('position_title');
            $table->string('summary', 5000);
            $table->text('content')->nullable();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('experiences');
    }
}
