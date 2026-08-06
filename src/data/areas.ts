export interface Area {
  slug: string;
  name: string;
  intro: string;
  work: string;
  access: string;
  species: string;
  wind: string;
  conservation: string;
}

export const areas: Area[] = [
  {
    slug: 'durham',
    name: 'Durham',
    intro:
      'Durham city sits on the River Wear, with steep wooded banks and a dense tree canopy around the cathedral and castle peninsula. Gardens here are often terraced into the valley sides, so trees are close to buildings and access is frequently tight.',
    work:
      'Tree work in Durham city commonly means taking overgrown garden trees back from houses, sectional dismantling where there is no room to fell, clearing storm damage, and removing trees too large for the space.',
    access:
      'Many Durham gardens are reached by narrow lanes, shared drives or steep steps, so kit often has to be carried in and timber carried out. Parking is a real constraint in the centre.',
    species:
      'Sycamore, ash, beech and horse chestnut dominate the older gardens, with leylandii screens on the newer estates. Ash dieback is an active problem across the city.',
    wind: 'The Wear valley is relatively sheltered, but the higher streets towards the edges of the city catch the wind, and storm damage after strong south-westerlies is common.',
    conservation:
      'Durham City is itself a Conservation Area, and the peninsula around the cathedral and castle has strict controls. TPOs are common. We check both before any work.',
  },
  {
    slug: 'chester-le-street',
    name: 'Chester-le-Street',
    intro:
      'Chester-le-Street is a market town on the River Wear, roughly six miles north of Durham, with a Roman fort origin (Concangis). Older streets near the market place sit alongside larger gardens on the edges towards Lumley.',
    work:
      'Homes in Chester-le-Street and the surrounding villages often have mature garden trees that have outgrown their plots, needing reduction, removal or stump grinding to reclaim the garden.',
    access:
      'Town centre streets are tight and the Saturday market restricts access on market days. Most residential streets off the main road allow van parking but not large machinery.',
    species:
      'Beech, sycamore, lime and horse chestnut line the older streets and gardens, with conifer screens on the newer developments around the edges of the town.',
    wind: 'The Wear valley offers some shelter, but the town is exposed to wind coming down the valley from the north-east.',
    conservation:
      'Chester-le-Street has its own Conservation Area around the town centre and St Mary and St Cuthbert church. We check TPO status before quoting.',
  },
  {
    slug: 'consett',
    name: 'Consett',
    intro:
      'Consett sits high on the edge of the Derwent Valley, west of Durham, one of the highest towns in England. The former steel town has steep streets and exposed gardens that take the brunt of weather coming off the Pennines.',
    work:
      'Exposed sites around Consett mean trees take storm damage first. We deal with split limbs, leaning trees and removals where wind has made a tree unsafe, plus the usual reductions and crown work.',
    access:
      'Streets around Consett are steep and many gardens back onto embankments. The high position means strong wind on site, which we factor into how we rig and dismantle.',
    species:
      'Sycamore and ash are widespread, with birch and rowan on the higher, exposed sites. Leylandii and other conifers are common shelter screens.',
    wind: 'The altitude and open position make Consett one of the most wind-exposed towns in County Durham. Storm damage and wind-shaped trees are the norm here.',
    conservation:
      'There are several Conservation Areas close to Consett, including Blackhill, Iveston, Low Westwood and Shotley Bridge, and parts of the town centre are covered by TPOs.',
  },
  {
    slug: 'bishop-auckland',
    name: 'Bishop Auckland',
    intro:
      'Bishop Auckland is a market town at the meeting of the River Wear and the River Gaunless, south-west of Durham, with Auckland Castle and its grounds at the heart of the town.',
    work:
      'Tree work around Bishop Auckland spans small garden trees needing a tidy-up through to large specimen trees in the older grounds, requiring reduction or full removal with the timber taken away.',
    access:
      'The town centre around the Market Place has narrow streets and parking restrictions. Many of the larger gardens sit on the slopes down to the Wear and Gaunless, with awkward vehicle access.',
    species:
      'Oak, beech, sycamore and lime are common in the older parks and grounds, with cherry, willow and conifers in residential gardens.',
    wind: 'The river valleys give some shelter, but the town is open to weather from the west and the higher edges catch strong winds.',
    conservation:
      'Bishop Auckland has a Conservation Area covering the town centre and the area around Auckland Castle. There are TPOs across the town, particularly near the castle grounds.',
  },
  {
    slug: 'spennymoor',
    name: 'Spennymoor',
    intro:
      'Spennymoor sits on high ground between Durham and Bishop Auckland, a former pit town of older terraced streets and newer estates with established gardens.',
    work:
      'Common jobs in Spennymoor are crown reductions on trees planted decades ago that now block light, plus hedge removals and stump grinding to open up gardens.',
    access:
      'Terraced streets in the older parts of town have rear access via ginnels and alleys, which can limit what machinery we can get to the garden.',
    species:
      'Sycamore, ash and leylandii are the most common garden trees, with cherry and ornamental pear on the newer estates.',
    wind: 'The town sits on an exposed plateau around 150m above sea level, so trees here take a steady wind and storm damage is not unusual.',
    conservation:
      'Kirk Merrington Conservation Area is just outside Spennymoor, and the town has scattered TPOs. We check the register before any work.',
  },
  {
    slug: 'stanley',
    name: 'Stanley',
    intro:
      'Stanley is a hilltop town between Chester-le-Street and Consett, one of the highest towns in County Durham. The name comes from the Old English for "stony woodland clearing", and it was built on coal mining.',
    work:
      'The exposed position around Stanley means trees take a battering in strong winds. We prioritise storm-damaged trees and unsafe leaning specimens here, alongside routine reductions and removals.',
    access:
      'The town is built on a hilltop with steep streets and terraced rows. Rear gardens are often reached through narrow passages, and the high, open position means wind on site is a factor.',
    species:
      'Ash, sycamore and birch dominate, with conifer screens on the exposed edges of town. Trees here are often wind-shaped and lean away from the prevailing wind.',
    wind: 'At over 200m, Stanley is exposed in every direction. Trees take regular wind damage and we see more split limbs and leaning trees here than almost anywhere else we work.',
    conservation:
      'Beamish Burn and Tanfield Conservation Areas are close to Stanley, and parts of the town and surrounding villages are covered by TPOs.',
  },
  {
    slug: 'lanchester',
    name: 'Lanchester',
    intro:
      'Lanchester sits on the A691 west of Durham, on the edge of the Derwent Valley, a village of older stone houses and established gardens with mature trees. The Romans built a fort (Longovicium) on the hill above.',
    work:
      'Older gardens in Lanchester often hold trees planted half a century ago that now crowd the house. Crown thinning, lifting and deadwood removal keep them safe and let light in.',
    access:
      'The older part of the village has narrow lanes and stone-walled gardens, so access for machinery is limited and we often work by hand or with sectional rigging.',
    species:
      'Beech, sycamore, ash and oak are common in the older gardens, with silver birch and rowan on the higher ground towards the moors.',
    wind: 'The village sits on the exposed edge of the Durham plateau, open to west and north winds coming off the Pennines.',
    conservation:
      'Lanchester has its own Conservation Area covering the historic core of the village, and there are TPOs on many of the mature garden trees.',
  },
  {
    slug: 'sacriston',
    name: 'Sacriston',
    intro:
      'Sacriston is a former colliery village three miles north of Durham, taking its name from Sacristan\'s Heugh, the estate that funded repairs to Durham Cathedral. It has modern estates and older streets set around the village centre.',
    work:
      'Semi-mature garden trees are the norm in Sacriston. We carry out reductions, removals and stump grinding to keep gardens manageable, and deal with the ash dieback cases that are becoming common.',
    access:
      'Most gardens are reached from standard streets with kerb parking, though some older terraces have restricted rear access. Generally straightforward access compared with the city.',
    species:
      'Ash and sycamore dominate, with leylandii screens on the estates and cherry and birch in newer gardens. Ash dieback is being seen across the village.',
    wind: 'The village sits on fairly open ground north of Durham and is exposed to winds from the north and west.',
    conservation:
      'There is no Conservation Area in Sacriston itself, but nearby Plawsworth and the Durham City Conservation Area are close by. Individual TPOs apply to some garden trees.',
  },
  {
    slug: 'brandon',
    name: 'Brandon',
    intro:
      'Brandon lies along the A690 south-east of Durham, a former colliery village with a mix of older terraces and newer housing with gardens backing onto green space.',
    work:
      'Garden trees in Brandon often grow unchecked for years. We bring them back with crown work or remove them entirely, leaving the stump ground out and the site clean.',
    access:
      'Terraced rows in the older part of the village have rear access via alleys, while the newer estates have standard drives. Some gardens back onto the burn and are only reachable on foot.',
    species:
      'Sycamore, ash, willow and leylandii are common, with oak and beech in the older gardens and along the burn.',
    wind: 'The Browney valley is fairly sheltered, though the higher ground towards the edges of the village is more exposed.',
    conservation:
      'Brandon has its own Conservation Area around the historic core, and Brancepeth Conservation Area is nearby. TPOs cover several of the older trees.',
  },
  {
    slug: 'coxhoe',
    name: 'Coxhoe',
    intro:
      'Coxhoe is a village on the limestone ridge east of Durham, off the A177. Its position on the escarpment means exposed gardens and strong winds off the Durham plateau.',
    work:
      'Exposure is the issue in Coxhoe. We deal with wind-damaged trees, storm response and preventative removals before a tree becomes a problem, plus the usual reductions and hedge work.',
    access:
      'The village sits on a ridge, so many gardens drop steeply away from the road. Access is often better from the rear, and we plan machinery access carefully.',
    species:
      'Ash and sycamore are widespread, with beech and oak on the older properties and conifer screens on the exposed edges.',
    wind: 'On the limestone escarpment, Coxhoe is exposed to winds from all directions, and storm damage to mature trees is common here.',
    conservation:
      'Old Cassop and Cornforth Conservation Areas are nearby. There is no Conservation Area in Coxhoe itself, but some garden trees carry TPOs.',
  },
  {
    slug: 'ferryhill',
    name: 'Ferryhill',
    intro:
      'Ferryhill sits on the old A167 route south of Durham, in the gap through the limestone escarpment where the railway and road cut through the ridge. The town has steep streets and terraced housing with small gardens.',
    work:
      'Smaller gardens in Ferryhill mean trees get close to houses. We specialise in tight-access removals and sectional dismantling where there is no room for a straight fell.',
    access:
      'The town climbs the escarpment, so many gardens are on steep slopes with narrow access. Trees are often wedged between houses and boundary walls, calling for rope work rather than straight felling.',
    species:
      'Ash, sycamore and leylandii are the main garden trees, with cherry and plum in the smaller terraced gardens.',
    wind: 'The town is exposed on the escarpment, and the gap in the ridge funnels the wind. Storm damage is a regular call-out here.',
    conservation:
      'There is no Conservation Area in Ferryhill itself; the nearest are at Kirk Merrington and Mainsforth. TPOs are scattered, and we always check.',
  },
  {
    slug: 'newton-aycliffe',
    name: 'Newton Aycliffe',
    intro:
      'Newton Aycliffe is a post-war new town south of County Durham near the A1(M), with wide avenues, green verges and gardens planted when the town was built in the 1950s.',
    work:
      'Trees planted with the new town in the 1950s are now at the end of their safe life. We carry out removals and replanting advice, plus reductions where trees can be kept.',
    access:
      'The town was built with wide roads and drives, so access for machinery is generally the easiest of anywhere we work. Most trees are in open gardens or on grass verges.',
    species:
      'The new town planting was heavy on lime, sycamore, ash and poplar, and many of those 70-year-old trees are now past their safe life. Leylandii screens are common on the estates.',
    wind: 'The town sits in lower, flatter ground than most of County Durham, so it is more sheltered, though exposed to easterly winds across the Tees lowlands.',
    conservation:
      'Aycliffe Village Conservation Area is on the edge of the town, and there are TPOs on many of the older street trees.',
  },
];
