package com.creature.rpg.creature;

public class CreatureFactory {

    public static CreatureActor getCreature(String species) {
        CreatureActor c = new CreatureActor(species);
        return c;
    }
}
