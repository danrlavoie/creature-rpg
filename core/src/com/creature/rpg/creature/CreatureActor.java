package com.creature.rpg.creature;

import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.Batch;
import com.badlogic.gdx.scenes.scene2d.Actor;

import java.util.UUID;

public class CreatureActor extends Actor {
    private Texture texture;

    private String id;
    private String name;

    private int xp;
    private int level;
    private int nextLevelXP;

    public int getLevel() {
        return this.level;
    }

    private int maxHP;
    private int hp;
    private boolean isAlive;

    private int maxSP;
    private int sp;

    private int atk;
    private int def;
    private int agi;
    private int wis;
    private int res;

    public int getATK() {
        return this.atk;
    }
    public int getDEF() {
        return this.def;
    }
    public int getAGI() {
        return this.agi;
    }
    public int getWIS() {
        return this.wis;
    }
    public int getRES() {
        return this.res;
    }

    public CreatureActor() {
        this(0, 1);
    }
    public CreatureActor(int xp, int level) {
        this.id = UUID.randomUUID().toString();
        this.xp = xp;
        this.level = level;

    }

    private void levelUp() {

    }

    private void addXP(int xp) {
        this.xp += xp;
        if (this.xp >= nextLevelXP) {
            levelUp();
        }
    }

    public void combatAction() {

    }

    @Override
    public void draw(Batch batch, float alpha) {
        batch.draw(texture,this.getX(),getY());
    }

    @Override
    public void act(float delta) {

    }
}
