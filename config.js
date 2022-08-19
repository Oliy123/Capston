var config = {
    style: 'mapbox://styles/oliyad/cl6ymbvmw001214miz158bndz',
    accessToken: 'pk.eyJ1Ijoib2xpeWFkIiwiYSI6ImNrdjdsa24wYzI5dW8ycG1zdGY3Nmdlc2kifQ.8CO7mcebHy1ivmhe25EQDg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Micro dam site selection using an integrated method of AHP and GIS on Muger watershed',
    //subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Oliyad Gamechu',
    footer: "Source: source citations, <p>Liou, Yuei-An, and Getachew Mehabie Mulualem. “Spatio–temporal Assessment of Drought in Ethiopia and the Impact of Recent Intense Droughts.” Remote Sensing (Basel, Switzerland), vol. 11, no. 15, MDPI AG, 2019, p. 1828, https://doi.org/10.3390/rs11151828</p> <p2>Saaty. (1977). A scaling method for priorities in hierarchical structures.</p1> <p>Zhang, Ji, P., Wang, J., & Chen, X. (2015). An Improved Weighted Correlation Coefficient Based on Integrated Weight for Interval Neutrosophic Sets and its Application in Multi-criteria Decision-making Problems.</p>",
    chapters: [
      {
            id: 'intro',
            alignment: 'left',
            title: ' ',
            image: '',
            description: "<p>There are approximately 110 million people in Ethiopia, which is the second most populous country in Africa after Nigeria. The country is predominantly a farming community with low productivity that is heavily dependent on rain-fed agriculture. As a result of water scarcity, global warming, and an increasing population, more effective methods for conserving water are needed. Ethiopia is experiencing an unpredictable amount of rainfall season, which has led to food shortages and water deficiencies crop failure, and drought. In Ethiopia, most river basins receive most of the water during June, July, August, and September (Lala, Yang, et al., 2021). However, the area is mainly dry during the summer months. Because most of the country's population relies on rain-fed agriculture, its economy is highly susceptible to weather and climate variations, which are highly variable both temporally and spatially. During a dry season, farmers are not able to meet their needs or pay their obligations (taxes, credits, etc.). The farmer remains at the bottom of the poverty scale and leads a risky lifestyle.",
            location: {
                center: [38, 11],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
              {layer: "mugar-watershade", opacity: 1, duration: 150},{layer: "mugar-watershade", opacity: 1,},
            ],
            onChapterExit: [{layer: "mugar-watershade", opacity: 0},]
        },
        {
            id: 'dams',
            alignment: 'left',
            title: '',
            image: '',
            description: 'The study area is on the Muger watershed found in northern Shewa Ethiopia. This study set out to find potential locations for suitable micro dam construction sites by combining remote sensing and geographic information system techniques with multi-criteria decision analysis. The study assessed the models and map a suitability map, which was derived from an analysis of eight influencing parameters used to locate potential micro dam locations.',
            location: {
              center: [38.1, 9.5],
              zoom: 7.5,
              pitch: 25,
              bearing: 0
            },
            onChapterEnter: [{layer: 'mugar-watershade', opacity: .25}, {layer: 'river_oliyad2022', opacity: 1}],
            onChapterExit: [{layer: 'river_oliyad2022', opacity: 1},{layer: "river_oliyad2022", opacity: 0,}]
           },
           {
               id: 'dame',
               alignment: 'center',
               title: 'Data and methodology',
               image: 'images/screenshot2.png',
               description: "<p>The project employed MCDA in conjunction with a GIS to find appropriate micro dam construction sites. The approach was introduced in four stages. In phase one, there was planning and other work that had to be done before the project could start. This included figuring out the criteria that affect where a micro dam is built so that the needed data could be controlled. Phase two consisted of gathering the relevant data while adhering to the set of criteria. In phase three, appropriate qualities for each criteria were found, as well as the effect of each criterion using AHP. The weighted criteria were superimposed in the final phase using a weighted overlay technique to create a suitability map that included all criteria.For processing imagery datasets, such as DEM, soil, geological layers, land cover, precipitation, and other products from these datasets, ArcMap10.8 is used. Excel is used to do a basic statistical analysis and construct tables and histograms  </p2><p3><img src='images/screenshot.png' width='100%' height='auto'></p3> <ul style='list-style-type:square'><li>Data Reclassification</li>ArcGIS' Spatial Analyst Tools were used to classify the data. Each criterion was awarded a ranking based on its expected impact on site selection throughout the categorization phase. A common ratio scale must be established for each input layer before it can be merged for analysis since each input layer may contain a variety of values and numbering systems. To achieve this reclassification, each raster dataset was converted to a standard scale of 1 to 5, with 5 being the most favorable and 1 having the least positive influence on the choice of dam locations.<p3><img src='images/screenshot3.png' width='100%' height='auto'></p3><li>pairwise comparison.</li> A pairwise comparison method is used to calculate weights for each hierarchical level based on the odd values from 1 to 9 used to score the relative preferences for two items of the hierarchy created by Saaty1977 (Zhang., et al, 2015) in each level.  A pair-wise comparison matrix is created by performing pair-wise comparisons. A pair-wise comparison of the parameters is provided as input, and their relative weights are produced as output. Based on a scale of 1 - 9 in which 1 is equal in importance and 9 is extreme an importance, pair-wise derived by using a scale of 1 - 9</ul>",
               location: {
                 center: [38.1, 9.5],
                 zoom: 7.5,
                 pitch: 25,
                 bearing:0,
               },
               onChapterEnter: [{layer: 'suitablity_oliyad2017', opacity: .25,}],
               onChapterExit: [{layer: 'suitablity_oliyad2017', opacity: 0}]
           },
        {
            id: 'suitability',
            alignment: 'left',
            title: 'suitability map ',
            image: '',
            description: '<p>An Analytical Hierarchy Process (AHP) analysis using remote sensing and GIS was used to determine the best site for micro dam structures while accounting for eight layers. Sites suitable for micro dams were selected using a multi-criteria evaluation. The land cover/use map, the slope map, and the drainage order map were derived using image satellite data and DEM. A drainage order map and nine land use classes were made, along with all the criteria for choosing a good place to build a micro dam. According to their suitability, five equivalent units are employed as indicators. The yellow color represented land that is very high suitable for dam construction, the green color represented land that is high suitability, the white color represented land that is moderately suitability, the blue color represented land that is low suitability, and the red color represented land that is extremely low suitability not suitable for dam construction.',
            location: {
              center: [38.1, 9.5],
              zoom: 7.5,
              pitch: 25,
              bearing: 0
            },
            onChapterEnter: [{layer: 'suitablity_oliyad2017', opacity: 1,}],
            onChapterExit: [{layer: 'suitablity_oliyad2017', opacity: 0}]
        },


        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Result',
            //image: 'image.png',
            description: '<p>East Muger has generally high suitability for the construction site of micro dams, as shown in the suitability map.</p>',
            location: {
              center: { lon: 38.71280, lat: 9.37326 },
zoom: 15.79,
pitch: 42.50,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'mugar-watershade', opacity: .25}, {layer: 'river_oliyad2022', opacity: 1}],
            onChapterExit: [{layer: 'river_oliyad2022', opacity: 1},{layer: "river_oliyad2022", opacity: 0,}]
        },


        {
            id: 'tana',
            alignment: 'right',
            hidden: false,
            title: ' Result',
            //image: './path/to/image/source.png',
            description:  "<p>East Muger has generally high suitability for the construction site of micro dams, as shown in the suitability map.</p>",
            location: {
              center: { lon: 38.62938, lat: 9.36836 },
zoom: 16,
pitch: 42.50,
bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{layer: 'mugar-watershade', opacity: .25}, {layer: 'river_oliyad2022', opacity: 1}],
            onChapterExit: [{layer: 'river_oliyad2022', opacity: 1},{layer: "river_oliyad2022", opacity: 0,}]
        },
        {
            id: 'sudan',
            alignment: 'right',
            title: 'Result',
            image: '',
            description: "<p>Northwest Muger has generally low suitability for the construction site of micro dams, as shown in the suitability map.</p>",
            location: {
              center: { lon: 38.06696, lat: 9.75303 },
zoom: 13.84,
pitch: 60.00,
bearing: -25.00
            },
            onChapterEnter: [{layer: 'mugar-watershade', opacity: .25}, {layer: 'river_oliyad2022', opacity: 1}],
            onChapterExit: [{layer: 'river_oliyad2022', opacity: 1},{layer: "river_oliyad2022", opacity: 0,}]
           },
        //    {
        //        id: 'egypt',
        //        alignment: 'right',
        //        title: 'Nile make the Egypt desert Bloom ',
        //        image: '',
        //        description: "<p>If you ever wondered if the expression 'Water makes the desert bloom' was true, there is no better proof than this satellite Image of the Nile Valley in Egypt. For thousands of years, the lower Nile valley (northern end) has been a cradle of civilization. Surrounded by deserts, the Nile river brings much-needed water to the land and people, making the valley into an oasis of agriculture and life</p> <h1></h1>",
        //        location: {
        //          center: [31.12239, 30.85554],
        //             zoom: 7,
        //             pitch: 0.00,
        //             bearing: 0.00
        //        },
        //        onChapterEnter: [
        //          // {layer: 'layer-name', opacity: 1}
        //        ],
        //        onChapterExit: [
        //          // {layer: 'Layer-name', opacity: 0},{layer: "colSnake", opacity: 0,}
        //        ]
        //       },
        //






    ]
};
