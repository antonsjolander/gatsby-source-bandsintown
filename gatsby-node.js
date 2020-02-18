const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = ({ 
    actions, 
    createNodeId, 
    createContentDigest }, 
    configOptions) => {
        const { createNode } = actions
        delete configOptions.plugins
        
        const processEvent = event => {
            const nodeId = createNodeId(`pixabay-photo-${event.id}`)
            const nodeContent = JSON.stringify(event)
            const nodeData = Object.assign({}, event, {
              id: nodeId,
              parent: null,
              children: [],
              internal: {
                type: `BandsInTownEvent`,
                content: nodeContent,
                contentDigest: createContentDigest(event),
              },
            })
            return nodeData
          }
        const key = configOptions.key;
        const artist = configOptions.artist;
        const apiUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${key}`

        return (
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    data.forEach(event => {
                        const nodeData = processEvent(event)
                        createNode(nodeData)
                    })
                })
            )
    }