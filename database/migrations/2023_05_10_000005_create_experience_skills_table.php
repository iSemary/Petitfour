<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExperienceSkillsTable extends Migration {
    public function up() {
        Schema::create('experience_skills', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('experience_id');
            $table->unsignedBigInteger('skill_id');
            $table->timestamps();

            $table->foreign('experience_id')->references('id')->on('experiences')->onDelete('cascade');
            $table->foreign('skill_id')->references('id')->on('skills')->onDelete('cascade');
        });
    }

    public function down() {
        Schema::dropIfExists('experience_skills');
    }
}
