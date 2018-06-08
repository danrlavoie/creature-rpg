package com.creature.rpg;

import com.creature.rpg.creature.CreatureActor;
import com.creature.rpg.data.DataStore;

import java.util.ArrayList;
import java.util.Comparator;

public class CombatController {
    private DataStore ds = DataStore.getStore();
    private CreatureActor[] orderedCombatants;

    private Comparator<CreatureActor> agiComparator = new Comparator<CreatureActor>() {
        @Override
        public int compare(CreatureActor a, CreatureActor b) {
            int agiA = a.getAGI();
            int agiB = b.getAGI();
            int levelA = a.getLevel();
            int levelB = b.getLevel();
            int randA = (int)(Math.random() * levelA * 3);
            int randB = (int)(Math.random() * levelB * 3);

            return (randA + agiA) - (randB + agiB);
        }
    };
    public void executeCombatRound() {
        this.orderedCombatants = calculateActingOrder();
        for (int i = 0; i < orderedCombatants.length; i++) {
            orderedCombatants[i].combatAction();
        }
    }

    public CreatureActor[] calculateActingOrder() {
        return null;
    }
}
