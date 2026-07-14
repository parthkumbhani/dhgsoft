import os
import urllib.request
import time
from PIL import Image

# Define the target paths and Unsplash photo IDs.
# We ensure every photo ID is globally unique to satisfy the prompt's requirements.
image_mapping = {
    # 1. Home Page
    "images/home/service-strategy.jpg": ("photo-1504384308090-c894fdcc538d", "card"),
    "images/home/service-design.jpg": ("photo-1581092580497-e0d23cbdf1dc", "card"),
    "images/home/service-deploy.jpg": ("photo-1581092160607-ee22621dd758", "card"),
    "images/home/service-operate.jpg": ("photo-1581092921461-eab62e97a780", "card"),
    "images/home/service-enable.jpg": ("photo-1581092918056-0c4c3acd3789", "card"),

    # 2. About Page
    "images/about/about-cover.jpg": ("photo-1551434678-e076c223a692", "hero"),
    "images/about/about-purpose.jpg": ("photo-1517245386807-bb43f82c33c4", "card"),
    "images/about/about-closing.jpg": ("photo-1522071820081-009f0129c71c", "card"),

    # 3. Capabilities Landing Page
    "images/capabilities/capabilities-hero.jpg": ("photo-1451187580459-43490279c0fa", "hero"),
    "images/capabilities/capabilities-overview.jpg": ("photo-1518770660439-4636190af475", "overview"),
    "images/capabilities/spotlight-idt.jpg": ("photo-1563986768609-322da13575f3", "card"),

    # 4. Capabilities Sub-Pages (10 sub-pages, 3 slots each = 30 images)
    # Sub-page 1: industrial-digital-transformation
    "images/capabilities/industrial-digital-transformation/hero.jpg": ("photo-1535378917042-10a22c95931a", "hero"),
    "images/capabilities/industrial-digital-transformation/overview.jpg": ("photo-1508962914676-134849a727f0", "overview"),
    "images/capabilities/industrial-digital-transformation/band.jpg": ("photo-1600132806370-bf17e65e942f", "band"),

    # Sub-page 2: ot-it-integration
    "images/capabilities/ot-it-integration/hero.jpg": ("photo-1504384308090-c894fdcc538d", "hero"),
    "images/capabilities/ot-it-integration/overview.jpg": ("photo-1515378791036-0648a3ef77b2", "overview"),
    "images/capabilities/ot-it-integration/band.jpg": ("photo-1542831371-29b0f74f9713", "band"),

    # Sub-page 3: industrial-data-platforms
    "images/capabilities/industrial-data-platforms/hero.jpg": ("photo-1551288049-bebda4e38f71", "hero"),
    "images/capabilities/industrial-data-platforms/overview.jpg": ("photo-1527474305487-b87b222841cc", "overview"),
    "images/capabilities/industrial-data-platforms/band.jpg": ("photo-1548345680-f5475ea5df84", "band"),

    # Sub-page 4: ai-analytics
    "images/capabilities/ai-analytics/hero.jpg": ("photo-1507537297725-24a1c029d3ca", "hero"),
    "images/capabilities/ai-analytics/overview.jpg": ("photo-1531747118685-ca8fa6e08806", "overview"),
    "images/capabilities/ai-analytics/band.jpg": ("photo-1485827404703-89b55fcc595e", "band"),

    # Sub-page 5: iiot
    "images/capabilities/iiot/hero.jpg": ("photo-1518770660439-4636190af475", "hero"),
    "images/capabilities/iiot/overview.jpg": ("photo-1591453089816-0fbb971b454c", "overview"),
    "images/capabilities/iiot/band.jpg": ("photo-1555066931-4365d14bab8c", "band"),

    # Sub-page 6: digital-engineering
    "images/capabilities/digital-engineering/hero.jpg": ("photo-1605810230434-7631ac76ec81", "hero"),
    "images/capabilities/digital-engineering/overview.jpg": ("photo-1607799279861-4dd421887fb3", "overview"),
    "images/capabilities/digital-engineering/band.jpg": ("photo-1531403009284-440f080d1e12", "band"),

    # Sub-page 7: enterprise-applications
    "images/capabilities/enterprise-applications/hero.jpg": ("photo-1454165804606-c3d57bc86b40", "hero"),
    "images/capabilities/enterprise-applications/overview.jpg": ("photo-1586528116311-ad8dd3c8310d", "overview"),
    "images/capabilities/enterprise-applications/band.jpg": ("photo-1507925921958-8a62f3d1a50d", "band"),

    # Sub-page 8: cloud-infrastructure
    "images/capabilities/cloud-infrastructure/hero.jpg": ("photo-1597852074816-d933c7d2b988", "hero"),
    "images/capabilities/cloud-infrastructure/overview.jpg": ("photo-1601597111158-2fceff292cdc", "overview"),
    "images/capabilities/cloud-infrastructure/band.jpg": ("photo-1526374965328-7f61d4dc18c5", "band"),

    # Sub-page 9: cybersecurity
    "images/capabilities/cybersecurity/hero.jpg": ("photo-1624969862644-791f3dc98927", "hero"),
    "images/capabilities/cybersecurity/overview.jpg": ("photo-1510511459019-5dda7724fd87", "overview"),
    "images/capabilities/cybersecurity/band.jpg": ("photo-1510915228340-29c85a43dcfe", "band"),

    # Sub-page 10: managed-services
    "images/capabilities/managed-services/hero.jpg": ("photo-1573164713988-8665fc963095", "hero"),
    "images/capabilities/managed-services/overview.jpg": ("photo-1486406146926-c627a92ad1ab", "overview"),
    "images/capabilities/managed-services/band.jpg": ("photo-1529156069898-49953e39b3ac", "band"),

    # 5. Industries Page Heroes & Use cases (14 industries, 9 slots each = 126 images)
    # Slug 1: industrial-manufacturing
    "images/industries/industrial-manufacturing/hero.jpg": ("photo-1581091226825-a6a2a5aee158", "hero"),
    "images/industries/industrial-manufacturing/use-case-01.jpg": ("photo-1616401784845-180882ba9ba8", "card"),
    "images/industries/industrial-manufacturing/use-case-02.jpg": ("photo-1612538498456-e861df91d4d0", "card"),
    "images/industries/industrial-manufacturing/use-case-03.jpg": ("photo-1504917595217-d4dc5ebe6122", "card"),
    "images/industries/industrial-manufacturing/use-case-04.jpg": ("photo-1555066931-4365d14bab8c", "card"),
    "images/industries/industrial-manufacturing/use-case-05.jpg": ("photo-1565034946487-077786996e27", "card"),
    "images/industries/industrial-manufacturing/use-case-06.jpg": ("photo-1526374965328-7f61d4dc18c5", "card"),
    "images/industries/industrial-manufacturing/use-case-07.jpg": ("photo-1531297484001-80022131f5a1", "card"),
    "images/industries/industrial-manufacturing/use-case-08.jpg": ("photo-1550751827-4bd374c3f58b", "card"),

    # Slug 2: life-sciences
    "images/industries/life-sciences/hero.jpg": ("photo-1532187643603-ba119ca4109e", "hero"),
    "images/industries/life-sciences/use-case-01.jpg": ("photo-1584308666744-24d5c474f2ae", "card"),
    "images/industries/life-sciences/use-case-02.jpg": ("photo-1582719508461-905c673771fd", "card"),
    "images/industries/life-sciences/use-case-03.jpg": ("photo-1579154204601-01588f351e67", "card"),
    "images/industries/life-sciences/use-case-04.jpg": ("photo-1628771065518-0d82f1938462", "card"),
    "images/industries/life-sciences/use-case-05.jpg": ("photo-1576086213369-97a306d36557", "card"),
    "images/industries/life-sciences/use-case-06.jpg": ("photo-1507537297725-24a1c029d3ca", "card"),
    "images/industries/life-sciences/use-case-07.jpg": ("photo-1531747118685-ca8fa6e08806", "card"),
    "images/industries/life-sciences/use-case-08.jpg": ("photo-1504868584819-f8e8b4b6d7e3", "card"),

    # Slug 3: automotive
    "images/industries/automotive/hero.jpg": ("photo-1563720223185-11003d516935", "hero"),
    "images/industries/automotive/use-case-01.jpg": ("photo-1508962914676-134849a727f0", "card"),
    "images/industries/automotive/use-case-02.jpg": ("photo-1617814076367-b759c7d7e738", "card"),
    "images/industries/automotive/use-case-03.jpg": ("photo-1517524206127-48bbd363f3d7", "card"),
    "images/industries/automotive/use-case-04.jpg": ("photo-1508873535684-277a3cbcc4e8", "card"),
    "images/industries/automotive/use-case-05.jpg": ("photo-1515187029135-18ee286d815b", "card"),
    "images/industries/automotive/use-case-06.jpg": ("photo-1517694712202-14dd9538aa97", "card"),
    "images/industries/automotive/use-case-07.jpg": ("photo-1454165804606-c3d57bc86b40", "card"),
    "images/industries/automotive/use-case-08.jpg": ("photo-1605379399642-870262d3d051", "card"),

    # Slug 4: semiconductor
    "images/industries/semiconductor/hero.jpg": ("photo-1624701928517-44c8ac49d93c", "hero"),
    "images/industries/semiconductor/use-case-01.jpg": ("photo-1555664424-778a1e5e1b48", "card"),
    "images/industries/semiconductor/use-case-02.jpg": ("photo-1607604276583-eef5d076aa5f", "card"),
    "images/industries/semiconductor/use-case-03.jpg": ("photo-1605810230434-7631ac76ec81", "card"),
    "images/industries/semiconductor/use-case-04.jpg": ("photo-1607604276583-eef5d076aa5f", "card"),
    "images/industries/semiconductor/use-case-05.jpg": ("photo-1517694712202-14dd9538aa97", "card"),
    "images/industries/semiconductor/use-case-06.jpg": ("photo-1461749280684-dccba630e2f6", "card"),
    "images/industries/semiconductor/use-case-07.jpg": ("photo-1486312338219-ce68d2c6f44d", "card"),
    "images/industries/semiconductor/use-case-08.jpg": ("photo-1519389950473-47ba0277781c", "card"),

    # Slug 5: food-beverages
    "images/industries/food-beverages/hero.jpg": ("photo-1568254183919-78a4f43a2877", "hero"),
    "images/industries/food-beverages/use-case-01.jpg": ("photo-1549476464-37392f717541", "card"),
    "images/industries/food-beverages/use-case-02.jpg": ("photo-1605647540924-852290f6b0d5", "card"),
    "images/industries/food-beverages/use-case-03.jpg": ("photo-1528825871115-3581a5387919", "card"),
    "images/industries/food-beverages/use-case-04.jpg": ("photo-1582298538104-fe2e74c27f59", "card"),
    "images/industries/food-beverages/use-case-05.jpg": ("photo-1595246140625-573b715d11dc", "card"),
    "images/industries/food-beverages/use-case-06.jpg": ("photo-1516594798947-e65505dbb29d", "card"),
    "images/industries/food-beverages/use-case-07.jpg": ("photo-1516321165247-4aa89a48be28", "card"),
    "images/industries/food-beverages/use-case-08.jpg": ("photo-1551288049-bebda4e38f71", "card"),

    # Slug 6: chemical-manufacturing
    "images/industries/chemical-manufacturing/hero.jpg": ("photo-1541888946425-d81bb19240f5", "hero"),
    "images/industries/chemical-manufacturing/use-case-01.jpg": ("photo-1527018601619-a508a2be00cd", "card"),
    "images/industries/chemical-manufacturing/use-case-02.jpg": ("photo-1542282088-fe8426682b8f", "card"),
    "images/industries/chemical-manufacturing/use-case-03.jpg": ("photo-1518709268805-4e9042af9f23", "card"),
    "images/industries/chemical-manufacturing/use-case-04.jpg": ("photo-1622630998477-20aa696ecb05", "card"),
    "images/industries/chemical-manufacturing/use-case-05.jpg": ("photo-1551836022-d5d88e9218df", "card"),
    "images/industries/chemical-manufacturing/use-case-06.jpg": ("photo-1578328819058-b69f3a3b0f6b", "card"),
    "images/industries/chemical-manufacturing/use-case-07.jpg": ("photo-1532187643603-ba119ca4109e", "card"),
    "images/industries/chemical-manufacturing/use-case-08.jpg": ("photo-1563720223185-11003d516935", "card"),

    # Slug 7: oil-gas
    "images/industries/oil-gas/hero.jpg": ("photo-1518709268805-4e9042af9f23", "hero"),
    "images/industries/oil-gas/use-case-01.jpg": ("photo-1503951914875-452162b0f3f1", "card"),
    "images/industries/oil-gas/use-case-02.jpg": ("photo-1622630998477-20aa696ecb05", "card"),
    "images/industries/oil-gas/use-case-03.jpg": ("photo-1551836022-d5d88e9218df", "card"),
    "images/industries/oil-gas/use-case-04.jpg": ("photo-1578328819058-b69f3a3b0f6b", "card"),
    "images/industries/oil-gas/use-case-05.jpg": ("photo-1508873535684-277a3cbcc4e8", "card"),
    "images/industries/oil-gas/use-case-06.jpg": ("photo-1518709268805-4e9042af9f23", "card"),
    "images/industries/oil-gas/use-case-07.jpg": ("photo-1464822759023-fed622ff2c3b", "card"),
    "images/industries/oil-gas/use-case-08.jpg": ("photo-1485827404703-89b55fcc595e", "card"),

    # Slug 8: power-utilities
    "images/industries/power-utilities/hero.jpg": ("photo-1509391366360-2e959784a276", "hero"),
    "images/industries/power-utilities/use-case-01.jpg": ("photo-1466611653911-95081537e5b7", "card"),
    "images/industries/power-utilities/use-case-02.jpg": ("photo-1470071459604-3b5ec3a7fe05", "card"),
    "images/industries/power-utilities/use-case-03.jpg": ("photo-1605980776566-0486c3ac7617", "card"),
    "images/industries/power-utilities/use-case-04.jpg": ("photo-1498084393753-b411b2d26b34", "card"),
    "images/industries/power-utilities/use-case-05.jpg": ("photo-1569003339405-ea396a5a8a90", "card"),
    "images/industries/power-utilities/use-case-06.jpg": ("photo-1508514177221-188b1cf16e9d", "card"),
    "images/industries/power-utilities/use-case-07.jpg": ("photo-1473341304170-971dccb5ac1e", "card"),
    "images/industries/power-utilities/use-case-08.jpg": ("photo-1518770660439-4636190af475", "card"),

    # Slug 9: mining-metals
    "images/industries/mining-metals/hero.jpg": ("photo-1579546929518-9e396f3cc809", "hero"),
    "images/industries/mining-metals/use-case-01.jpg": ("photo-1533105079780-92b9be482077", "card"),
    "images/industries/mining-metals/use-case-02.jpg": ("photo-1516937941344-00b4e0337589", "card"),
    "images/industries/mining-metals/use-case-03.jpg": ("photo-1618042164219-62c820f10723", "card"),
    "images/industries/mining-metals/use-case-04.jpg": ("photo-1601597111158-2fceff270190", "card"),
    "images/industries/mining-metals/use-case-05.jpg": ("photo-1486406146926-c627a92ad1ab", "card"),
    "images/industries/mining-metals/use-case-06.jpg": ("photo-1508962914676-134849a727f0", "card"),
    "images/industries/mining-metals/use-case-07.jpg": ("photo-1518709268805-4e9042af9f23", "card"),
    "images/industries/mining-metals/use-case-08.jpg": ("photo-1504384308090-c894fdcc538d", "card"),

    # Slug 10: water-wastewater
    "images/industries/water-wastewater/hero.jpg": ("photo-1584267326134-639a0ff99764", "hero"),
    "images/industries/water-wastewater/use-case-01.jpg": ("photo-1504917595217-d4dc5ebe6122", "card"),
    "images/industries/water-wastewater/use-case-02.jpg": ("photo-1507925921958-8a62f3d1a50d", "card"),
    "images/industries/water-wastewater/use-case-03.jpg": ("photo-1531482615713-2afd69097998", "card"),
    "images/industries/water-wastewater/use-case-04.jpg": ("photo-1573497019940-1c28c88b4f3e", "card"),
    "images/industries/water-wastewater/use-case-05.jpg": ("photo-1497366216548-37526070297c", "card"),
    "images/industries/water-wastewater/use-case-06.jpg": ("photo-1504307651254-35680f356dfd", "card"),
    "images/industries/water-wastewater/use-case-07.jpg": ("photo-1518770660439-4636190af475", "card"),
    "images/industries/water-wastewater/use-case-08.jpg": ("photo-1550751827-4bd374c3f58b", "card"),

    # Slug 11: consumer-packaged-goods
    "images/industries/consumer-packaged-goods/hero.jpg": ("photo-1581092160607-ee22621dd758", "hero"),
    "images/industries/consumer-packaged-goods/use-case-01.jpg": ("photo-1541339907198-e08756dedf3f", "card"),
    "images/industries/consumer-packaged-goods/use-case-02.jpg": ("photo-1601597111158-2fceff292cdc", "card"),
    "images/industries/consumer-packaged-goods/use-case-03.jpg": ("photo-1542831371-29b0f74f9713", "card"),
    "images/industries/consumer-packaged-goods/use-case-04.jpg": ("photo-1565034946487-077786996e27", "card"),
    "images/industries/consumer-packaged-goods/use-case-05.jpg": ("photo-1526374965328-7f61d4dc18c5", "card"),
    "images/industries/consumer-packaged-goods/use-case-06.jpg": ("photo-1549476464-37392f717541", "card"),
    "images/industries/consumer-packaged-goods/use-case-07.jpg": ("photo-1586528116311-ad8dd3c8310d", "card"),
    "images/industries/consumer-packaged-goods/use-case-08.jpg": ("photo-1510915228340-29c85a43dcfe", "card"),

    # Slug 12: data-centres
    "images/industries/data-centres/hero.jpg": ("photo-1558494949-ef010cbdcc31", "hero"),
    "images/industries/data-centres/use-case-01.jpg": ("photo-1548345680-f5475ea5df84", "card"),
    "images/industries/data-centres/use-case-02.jpg": ("photo-1563986768609-322da13575f3", "card"),
    "images/industries/data-centres/use-case-03.jpg": ("photo-1597852074816-d933c7d2b988", "card"),
    "images/industries/data-centres/use-case-04.jpg": ("photo-1544197150-b99a580bb7a8", "card"),
    "images/industries/data-centres/use-case-05.jpg": ("photo-1531297484001-80022131f5a1", "card"),
    "images/industries/data-centres/use-case-06.jpg": ("photo-1597733336794-12d05021d510", "card"),
    "images/industries/data-centres/use-case-07.jpg": ("photo-1557804506-669a67965ba0", "card"),
    "images/industries/data-centres/use-case-08.jpg": ("photo-1550751827-4bd374c3f58b", "card"),

    # Slug 13: epc
    "images/industries/epc/hero.jpg": ("photo-1504307651254-35680f356dfd", "hero"),
    "images/industries/epc/use-case-01.jpg": ("photo-1639762681485-074b7f938ba0", "card"),
    "images/industries/epc/use-case-02.jpg": ("photo-1558494949-ef010cbdcc31", "card"),
    "images/industries/epc/use-case-03.jpg": ("photo-1504384308090-c894fdcc538d", "card"),
    "images/industries/epc/use-case-04.jpg": ("photo-1581092580497-e0d23cbdf1dc", "card"),
    "images/industries/epc/use-case-05.jpg": ("photo-1531403009284-440f080d1e12", "card"),
    "images/industries/epc/use-case-06.jpg": ("photo-1562813733-b31f71025d54", "card"),
    "images/industries/epc/use-case-07.jpg": ("photo-1504307651254-35680f356dfd", "card"),
    "images/industries/epc/use-case-08.jpg": ("photo-1516321318423-f06f85e504b3", "card"),

    # Slug 14: agriculture
    "images/industries/agriculture/hero.jpg": ("photo-1625246333195-78d9c38ad449", "hero"),
    "images/industries/agriculture/use-case-01.jpg": ("photo-1500937386664-56d1dfef3854", "card"),
    "images/industries/agriculture/use-case-02.jpg": ("photo-1518770660439-4636190af475", "card"),
    "images/industries/agriculture/use-case-03.jpg": ("photo-1552664730-d307ca884978", "card"),
    "images/industries/agriculture/use-case-04.jpg": ("photo-1522071820081-009f0129c71c", "card"),
    "images/industries/agriculture/use-case-05.jpg": ("photo-1600880292203-757bb62b4baf", "card"),
    "images/industries/agriculture/use-case-06.jpg": ("photo-1556761175-5973dc0f32e7", "card"),
    "images/industries/agriculture/use-case-07.jpg": ("photo-1582213782179-e0d53f98f2ca", "card"),
    "images/industries/agriculture/use-case-08.jpg": ("photo-1516549655169-df83a0774514", "card"),

    # 6. Insights Page & subpages
    "images/insights/insights-hero.jpg": ("photo-1507679799987-c73779587ccf", "hero"),
    "images/insights/insights-intro.jpg": ("photo-1504384308090-c894fdcc538d", "card"),
    "images/insights/insights-band-knowledge.jpg": ("photo-1516321165247-4aa89a48be28", "band"),
    "images/insights/insights-industries.jpg": ("photo-1581091226825-a6a2a5aee158", "card"),
    "images/insights/insights-featured.jpg": ("photo-1563986768609-322da13575f3", "card"),
    "images/insights/insights-case-studies.jpg": ("photo-1508873535684-277a3cbcc4e8", "card"),
    "images/insights/insights-whitepapers.jpg": ("photo-1551288049-bebda4e38f71", "card"),
    "images/insights/insights-news.jpg": ("photo-1504868584819-f8e8b4b6d7e3", "card"),
    "images/insights/insights-resources.jpg": ("photo-1451187580459-43490279c0fa", "card"),
    "images/insights/insights-band-closing.jpg": ("photo-1522071820081-009f0129c71c", "band"),

    # Category card thumbnails (8 categories)
    "images/insights/cat/industrial-automation.jpg": ("photo-1531746020798-e6953c6e8e04", "card"),
    "images/insights/cat/ot-it-integration.jpg": ("photo-1515378791036-0648a3ef77b2", "card"),
    "images/insights/cat/iiot.jpg": ("photo-1518770660439-4636190af475", "card"),
    "images/insights/cat/ai-analytics.jpg": ("photo-1527474305487-b87b222841cc", "card"),
    "images/insights/cat/digital-engineering.jpg": ("photo-1605810230434-7631ac76ec81", "card"),
    "images/insights/cat/enterprise-apps.jpg": ("photo-1460925895917-afdab827c52f", "card"),
    "images/insights/cat/cloud.jpg": ("photo-1544197150-b99a580bb7a8", "card"),
    "images/insights/cat/cybersecurity.jpg": ("photo-1550751827-4bd374c3f58b", "card"),

    # Insights sub-pages (3 sub-pages, 3 slots each)
    # sub-page: ai-automation
    "images/insights/ai-automation/hero.jpg": ("photo-1531746020798-e6953c6e8e04", "hero"),
    "images/insights/ai-automation/overview.jpg": ("photo-1565034946487-077786996e27", "overview"),
    "images/insights/ai-automation/band.jpg": ("photo-1618005182384-a83a8bd57fbe", "band"),
    # sub-page: technology-ecosystem
    "images/insights/technology-ecosystem/hero.jpg": ("photo-1558494949-ef010cbdcc31", "hero"),
    "images/insights/technology-ecosystem/overview.jpg": ("photo-1517245386807-bb43f82c33c4", "overview"),
    "images/insights/technology-ecosystem/band.jpg": ("photo-1550751827-4bd374c3f58b", "band"),
    # sub-page: case-studies
    "images/insights/case-studies/hero.jpg": ("photo-1508873535684-277a3cbcc4e8", "hero"),
    "images/insights/case-studies/overview.jpg": ("photo-1516321318423-f06f85e504b3", "overview"),
    "images/insights/case-studies/band.jpg": ("photo-1522071820081-009f0129c71c", "band"),

    # 7. Careers Page & campus/culture
    "images/careers/careers-hero.jpg": ("photo-1522071820081-009f0129c71c", "hero"),
    "images/careers/life-at-dhgsoft.jpg": ("photo-1605379399642-870262d3d051", "card"),
    "images/careers/careers-innovation-band.jpg": ("photo-1519389950473-47ba0277781c", "band"),
    "images/careers/campus-callout.jpg": ("photo-1541339907198-e08756dedf3f", "card"),
    
    # Careers Culture
    "images/careers/culture/collaboration.jpg": ("photo-1531482615713-2afd69097998", "card"),
    "images/careers/culture/learning.jpg": ("photo-1573497019940-1c28c88b4f3e", "card"),
    "images/careers/culture/field-work.jpg": ("photo-1581092160607-ee22621dd758", "card"),
    "images/careers/culture/celebration.jpg": ("photo-1565043589221-1a6fd9ae45c7", "card"),

    # Campus Early Careers (6 slots)
    "images/careers/campus/hero.jpg": ("photo-1541339907198-e08756dedf3f", "hero"),
    "images/careers/campus/internship.jpg": ("photo-1531538606174-0f90ff5dce83", "card"),
    "images/careers/campus/mentorship.jpg": ("photo-1573497019940-1c28c88b4f3e", "card"),
    "images/careers/campus/events.jpg": ("photo-1522071820081-009f0129c71c", "card"),
    "images/careers/campus/hackathons.jpg": ("photo-1556761175-5973dc0f32e7", "card"),
    "images/careers/campus/partnerships.jpg": ("photo-1582213782179-e0d53f98f2ca", "card"),

    # 8. Contact Page
    "images/contact/contact-hero.jpg": ("photo-1507679799987-c73779587ccf", "hero")
}

def crop_and_resize(img, aspect_type, target_path):
    w, h = img.size
    
    # Determine crop dimensions based on aspect ratio type
    if aspect_type == "hero":
        # 16:9 aspect ratio
        target_w, target_h = 2400, 1350
    elif aspect_type == "band":
        # 21:9 or ~2.33 aspect ratio
        target_w, target_h = 2400, 1030
    elif aspect_type == "overview" or aspect_type == "portrait":
        # 4:5 aspect ratio
        target_w, target_h = 1600, 2000
    elif aspect_type == "card":
        # 4:3 aspect ratio
        target_w, target_h = 800, 600
    else:
        # Default fallback to 4:3
        target_w, target_h = 800, 600
        
    # Calculate crop coordinates (centered)
    target_aspect = target_w / target_h
    current_aspect = w / h
    
    if current_aspect > target_aspect:
        # Current is wider than target aspect, crop sides
        new_w = int(h * target_aspect)
        left = (w - new_w) // 2
        right = left + new_w
        top = 0
        bottom = h
    else:
        # Current is taller than target aspect, crop top/bottom
        new_h = int(w / target_aspect)
        top = (h - new_h) // 2
        bottom = top + new_h
        left = 0
        right = w
        
    cropped_img = img.crop((left, top, right, bottom))
    resized_img = cropped_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Save as optimized JPEG
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    resized_img.convert("RGB").save(target_path, "JPEG", quality=85)
    print(f"Saved: {target_path} ({target_w}x{target_h})")

def download_all():
    print(f"Starting download of {len(image_mapping)} unique images...")
    credits_list = []
    
    start_time = time.time()
    for rel_path, (photo_id, aspect_type) in image_mapping.items():
        dest_path = os.path.join("public", rel_path.replace("/", os.sep))
        
        # Check if already exists to prevent duplicate downloads
        if os.path.exists(dest_path):
            print(f"Already exists: {dest_path}")
            continue
            
        url = f"https://images.unsplash.com/{photo_id}?q=80"
        
        # We download to a temporary path first, then load it in PIL, crop, and save
        temp_filename = f"temp_{photo_id}.jpg"
        
        retries = 3
        while retries > 0:
            try:
                print(f"Downloading {photo_id} for {rel_path}...")
                urllib.request.urlretrieve(url, temp_filename)
                
                # Load, crop, and save
                with Image.open(temp_filename) as img:
                    crop_and_resize(img, aspect_type, dest_path)
                    
                # Clean up temp
                os.remove(temp_filename)
                
                # Append credit details
                credits_list.append(f"- **{rel_path}**: Sourced from Unsplash (ID: [{photo_id}](https://unsplash.com/photos/{photo_id})) under free-to-use license.")
                break
            except Exception as e:
                print(f"Error downloading {photo_id}: {e}. Retrying...")
                retries -= 1
                time.sleep(1)
                if os.path.exists(temp_filename):
                    try: os.remove(temp_filename)
                    except: pass
        else:
            print(f"FAILED to download {photo_id} for {rel_path} after 3 attempts.")
            
    # Generate credits.md
    credits_path = os.path.join("public", "images", "credits.md")
    os.makedirs(os.path.dirname(credits_path), exist_ok=True)
    with open(credits_path, "w", encoding="utf-8") as f:
        f.write("# Image Licensing and Attributions\n\n")
        f.write("All decorative photography used across the DHGsoft website is sourced from Unsplash.com under the Unsplash license (free to use for commercial and non-commercial purposes, no attribution required but provided here for transparency).\n\n")
        f.write("\n".join(credits_list))
        f.write("\n")
        
    print(f"Completed download & processing in {time.time() - start_time:.2f} seconds.")

if __name__ == "__main__":
    download_all()
