# [T3-Archive](https://awesomeplaya211.github.io/T3-Archive/)

[TheTrueTouch](https://rgl.gg/Public/Team.aspx?t=9886) Archive

## *Clear your browser cache to make sure you see the most recent page build*

## How to use this archive

### [./scrims/scrims.json](./scrims/scrims.json)

JSON file containing all the scrim matches

Example:

```json
[
    {
        "date": "2021-12-18",
        "matches": [
            {
                "map": "cp_process_f9a",
                "logs": [
                    "3092496",
                    "3092513"
                ],
                "demos": [
                    "753347",
                    "753356"
                ]
            },
            {
                "map": "cp_gullywash_final1",
                "logs": [
                    "3092532"
                ],
                "demos": [
                    "753379"
                ]
            }
        ]
    }
]
```

Access the JSON using the GitHub API

Example using [PyGithub](https://github.com/PyGithub/PyGithub) in Python:

```py
import json
from github import Github

g = Github("access_token")

scrims = g.get_user(login="awesomeplaya211").get_repo("T3-Archive").get_contents("scrims/scrims.json").decoded_content.decode()
scrims = json.loads(scrims)
```

Logs and demos can be accesed by going to <https://logs.tf/{id}> and <https://demos.tf/{id}>

Dates are in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD)

### [./roster/roster.json](./roster/roster.json)

JSON file containing the current roster

Example:

```json
[
    {
        "name": "Generic",
        "RGL": "https://rgl.gg/Public/PlayerProfile.aspx?p=76561198849263860",
        "roles": {
            "medic": "altsub",
            "demo": false,
            "combo": "altsub",
            "pocket": "sub",
            "flank": "altsub",
            "roamer": "sub"
        }
    },
    {
        "name": "Valentine",
        "RGL": "https://rgl.gg/Public/PlayerProfile.aspx?p=76561198135666129",
        "roles": {
            "medic": "altmain",
            "demo": "main",
            "combo": "altmain",
            "pocket": false,
            "flank": "altsmain",
            "roamer": false
        }
    }
]
```

Access the JSON using the GitHub API

Example using [PyGithub](https://github.com/PyGithub/PyGithub) in Python:

```py
import json
from github import Github

g = Github("access_token")

roster = g.get_user(login="awesomeplaya211").get_repo("T3-Archive").get_contents("roster/roster.json").decoded_content.decode()
roster = json.loads(scrims)
