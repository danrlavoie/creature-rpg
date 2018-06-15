package com.creature.rpg.data.selectors;

import com.creature.rpg.creature.CreatureActor;
import com.creature.rpg.creature.CreatureFactory;

import java.util.ArrayList;

public class SelectorTestDriver {

    public static void main(String[] args) {
        fillCreatureStore();
        ArrayList<CreatureActor> stuff = CreatureSelector.getPlayerPartyCreatures();
        for(int i = 0; i < stuff.size(); i++ ) {
            System.out.println(stuff.get(i));
        }
    }

    private static void fillCreatureStore() {
        CreatureActor c3 = CreatureFactory.getCreature("BlueJay", 0, 20);
        CreatureActor c4 = CreatureFactory.getCreature("BlueJay", 1, 30);
        CreatureActor c5 = CreatureFactory.getCreature("BlueJay", 1, 40);
        CreatureActor c6 = CreatureFactory.getCreature("BlueJay", 2, 50);
    }
}
