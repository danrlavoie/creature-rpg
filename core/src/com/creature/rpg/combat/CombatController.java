package com.creature.rpg.combat;

import com.creature.rpg.creature.CreatureActor;
import com.creature.rpg.data.DataStore;
import com.creature.rpg.data.selectors.CreatureSelector;

import java.util.ArrayList;
import java.util.Collections;
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
        ArrayList<CreatureActor> allCreatures = CreatureSelector.getAllPartyCreatures();
        Collections.sort(allCreatures, agiComparator);
        return allCreatures.toArray(new CreatureActor[allCreatures.size()]);
    }
}
