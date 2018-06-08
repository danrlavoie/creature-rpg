package com.creature.rpg.creature;

import com.creature.rpg.data.DataStore;

public class CreatureTestDriver {
    public static void main(String[] args) {
        CreatureActor c = CreatureFactory.getCreature("BlueJay", 0);
        System.out.println(c.statsText());
        CreatureActor c2 = CreatureFactory.getCreature("BlueJay", 0, 10);
        System.out.println(c2.statsText());
        CreatureActor c3 = CreatureFactory.getCreature("BlueJay", 0, 20);
        System.out.println(c3.statsText());
        CreatureActor c4 = CreatureFactory.getCreature("BlueJay", 1, 30);
        System.out.println(c4.statsText());
        CreatureActor c5 = CreatureFactory.getCreature("BlueJay", 1, 40);
        System.out.println(c5.statsText());
        CreatureActor c6 = CreatureFactory.getCreature("BlueJay", 2, 50);
        System.out.println(c6.statsText());
        System.out.println(DataStore.getStore());
    }
}
