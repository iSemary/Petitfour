<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSkillsTable extends Migration {
    public function up() {
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('category_id');
            $table->string('type');
            $table->tinyInteger('priority')->default(0);
            $table->string('icon')->nullable();
            $table->string('theme_icon')->nullable();
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('skills');
    }
}
