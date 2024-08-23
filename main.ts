player.onChat("run", function Coder () {
	
})
your_resource_mcpack /
├── assets /
│   └── minecraft /
│       ├── textures /
│       │   └── item /
│       │       └── custom_coder.mcpack
│       └── models /
│           └── item /
│               └── custom_coder.json
└──pack.mcmeta
{
    "pack": {
        "pack_format": 6,
            "description": "Custom Coder Item"
    }
} {
    "parent": "item/generated",
        "textures": {
        "layer0": "minecraft:item/custom_coder"
    }
}
your_datapack /
├── data /
│   └── minecraft /
│       └── tags /
│           └──items /
│               └──custom_items.json
└── pack.mcmeta
{
    "replace":false,
        "values": [
            "minecraft:stick"
        ]
}
/give @p minecraft:stick{display:{Name:'{"text":"Coder","color":"gold","bold":true}',Lore:['{"text":"Use to Edit Things","color":"white"}']}} 1
    / execute if entity @p[nbt = { SelectedItem: { id: "minecraft:stick", tag: { display: { Name: '{"text":"Coder"}' } } } }] run<your_command_here>