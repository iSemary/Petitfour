<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration {
    public function up() {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->mediumText('description');
            $table->tinyInteger('priority')->default(0);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('categories');
    }
}
