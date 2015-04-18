LEAKYWEEK.addScenario({
    "title": "Example",
    "id": 0,
    "description": "foo",
    "difficulty": "medium",
    "thumbnail": "example",
    "maps": {
        "monday": {
            tileSize: 32,
            floor: [
                [{   },{   },{   },{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6}],
                [{   },{   },{   },{f:6},{f:8},{f:8},{f:8},{f:8},{f:8},{f:8},{f:8},{f:8},{f:8},{f:8},{f:6}],
                [{   },{   },{   },{f:6},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:6}],
                [{   },{   },{   },{f:6},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:6}],
                [{f:6},{f:6},{f:6},{f:6},{f:1},{f:2},{f:2},{f:2},{f:2},{f:2},{f:2},{f:1},{f:1},{f:1},{f:6}],
                [{f:6},{f:8},{f:8},{f:8},{f:1},{f:2},{f:2},{f:2},{f:2},{f:2},{f:2},{f:1},{f:1},{f:1},{f:6}],
                [{f:6},{f:1},{f:1},{f:1},{f:1},{f:2},{f:2},{f:2},{f:2},{f:2},{f:2},{f:1},{f:1},{f:1},{f:6}],
                [{f:6},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:6}],
                [{f:6},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:1},{f:6}],
                [{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6},{f:6}]
            ],
            objects: [],
            entities: []
        }
    },
    "enter": function(){
        this.app.setState(LEAKYWEEK.days.monday);
    }
});
