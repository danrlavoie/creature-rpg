package com.creature.rpg.data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class DataNode {
    private String key;
    private Object value;
    private HashMap<String, Object> values;
    private HashMap<String, DataNode> nodeValues;

    public DataNode setValue(String key, Object value) {
        this.nodeValues.put(key, new DataNode(key, value));
        return this;
    }

    public DataNode(String key, Object value) {
        this.key = key;
        this.value = value;
        this.nodeValues = new HashMap<String, DataNode>();
    }

    public Object get(String key) {
        if (this.nodeValues.get(key) != null) {
            return this.nodeValues.get(key).value;
        }
        return null;
    }

    public Object getIn(String[] path) {
        String key = path[0];
        if (this.nodeValues.get(key) != null) {
            if (path.length > 1) {
                return this.nodeValues.get(key).getIn(Arrays.copyOfRange(path, 1, path.length));
            } else {
                return this.nodeValues.get(key).value;
            }
        }
        else {
            return null;
        }
    }

    public DataNode setIn(String[] path, Object value) {
        String key = path[0];
        if (path.length > 1) {
            if(this.nodeValues.get(key) == null) {
                // This keyPath doesn't exist yet, create it
                this.nodeValues.put(key, new DataNode(key, null));
                this.nodeValues.put(key, this.nodeValues.get(key).setIn(Arrays.copyOfRange(path, 1, path.length), value));
                return this;
            }
            else {
                // This keyPath does exist
                this.nodeValues.put(key, this.nodeValues.get(key).setIn(Arrays.copyOfRange(path, 1, path.length), value));
                return this;

            }
        }
        else {
            return this.setValue(key, value);
        }
    }

    public DataNode delete(String key) {
        this.nodeValues.remove(key);
        return this;
    }

    public DataNode deleteIn(String[] path) {
        String key = path[0];
        if (path.length > 1) {
            if(this.nodeValues.get(key) == null) {
                // If at any point on our path the keyPath is null, we don't need to do anything
                return this;
            }
            else {
                DataNode temp = this.nodeValues.get(key).deleteIn(Arrays.copyOfRange(path, 1, path.length));
                return this;
            }
        }
        else {
            DataNode temp = this.delete(key);
            return temp;
        }
    }

    public DataNode deleteAll(String[] keys) {
        for (String key : keys) {
            delete(key);
        }
        return this;
    }

    public String traverseTreeToString(String prefix) {
        String s = prefix + this.key;
        if (this.value != null) s += "\n\t" + prefix + this.value;
        for (String key : this.nodeValues.keySet()) {
            s += '\n';
            s += this.nodeValues.get(key).traverseTreeToString(prefix + '\t');
        }
        return s;
    }

    public String toString() {
        return traverseTreeToString("");
    }

}
