package com.creature.rpg.creature;

import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.Batch;
import com.badlogic.gdx.scenes.scene2d.Actor;
import com.creature.rpg.data.DataStore;

import java.util.Random;
import java.util.UUID;

public class CreatureActor extends Actor {
    private static DataStore ds = DataStore.getStore();

    private Texture texture;

    private String id;
    private String name;
    private String species;
    private String family;

    private int[] growthRates;

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
    public String getID() {
        return id;
    }

    public CreatureActor(String species) {
        this(species, 1);
    }
    public CreatureActor(String species, int level) {
        this.id = UUID.randomUUID().toString();
        this.xp = 0;
        this.level = 0;
        this.species = species;
        this.family = CreatureTemplate.Species_Families.get(species);
        this.growthRates = CreatureTemplate.Families_Growths.get(this.family).get(this.species);
        this.atk = this.def = this.agi = this.wis = this.res = this.maxHP = this.maxSP = 1;
        for (int i = 0; i < level; i++) {
            this.levelUp();
        }
        this.hp = this.maxHP;
        this.sp = this.maxSP;
    }

    private void levelUp() {
        this.level++;

        Random rand = new Random();
        this.maxHP += rand.nextInt(this.growthRates[0])/10;
        this.maxSP += rand.nextInt(this.growthRates[1])/10;
        this.nextLevelXP += rand.nextInt(this.growthRates[2]) * this.level;
        this.atk += rand.nextInt(this.growthRates[3])/10;
        this.def += rand.nextInt(this.growthRates[4])/10;
        this.agi += rand.nextInt(this.growthRates[5])/10;
        this.wis += rand.nextInt(this.growthRates[6])/10;
        this.res += rand.nextInt(this.growthRates[7])/10;

    }

    private void addXP(int xp) {
        this.xp += xp;
        if (this.xp >= nextLevelXP) {
            levelUp();
        }
    }

    public void setName(String name) {
        this.name = name;
    }

    public String statsText() {
        String s = "";
        s += this.name;
        s += "\t" + this.id;
        s += "\n" + this.family + "\t" + this.species;
        s += "\nLevel:\t" + this.level;
        s += "\nExp:\t" + this.xp;
        s += "\nHP:\t\t" + this.hp + "/" + this.maxHP;
        s += "\nSP:\t\t" + this.sp + "/" + this.maxSP;
        s += "\nATK:\t" + this.atk;
        s += "\nDEF:\t" + this.def;
        s += "\nAGI:\t" + this.agi;
        s += "\nWIS:\t" + this.wis;
        s += "\nRES:\t" + this.res;

        return s;
    }

    public String toString() {
        return this.statsText();
    }

    public void combatAction() {
        System.out.println(this.level + " " + this.species + " is Acting!");
        ds.setIn(new String[]{"Combat",this.id,"action"}, this.level);
    }

    @Override
    public void draw(Batch batch, float alpha) {
        batch.draw(texture,this.getX(),getY());
    }

    @Override
    public void act(float delta) {

    }
}
