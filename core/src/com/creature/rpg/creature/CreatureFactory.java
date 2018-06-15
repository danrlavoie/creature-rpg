package com.creature.rpg.creature;

import com.creature.rpg.data.DataStore;

public class CreatureFactory {
    private static DataStore ds = DataStore.getStore();

    public static CreatureActor getCreature(String species, int ownership) {
        CreatureActor c = new CreatureActor(species);
        if (ownership == 0) { ds.setIn(new String[]{"Creatures","EnemyParty",c.getID()}, c); }
        else if (ownership == 1) { ds.setIn(new String[]{"Creatures","PlayerParty",c.getID()}, c); }
        else { ds.setIn(new String[]{"Creatures","PlayerStorage",c.getID()}, c); }
        return c;
    }

    public static CreatureActor getCreature(String species, int ownership, int level) {
        CreatureActor c = new CreatureActor(species, level);
        if (ownership == 0) { ds.setIn(new String[]{"Creatures","EnemyParty",c.getID()}, c); }
        else if (ownership == 1) { ds.setIn(new String[]{"Creatures","PlayerParty",c.getID()}, c); }
        else { ds.setIn(new String[]{"Creatures","PlayerStorage",c.getID()}, c); }
        return c;
    }
}
