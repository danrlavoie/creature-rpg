package com.creature.rpg.creature;

public class CreatureTestDriver {
    public static void main(String[] args) {
        CreatureActor c = CreatureFactory.getCreature("BlueJay");
        System.out.println(c.statsText());
    }
}
