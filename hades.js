require('./core/bootstrap/main');
var BaseWorkflow = require('./core/workflow/base');

var config = {
    "resource": {
        "dianping_url": {
            "value": "http://www.dianping.com/beijing",
            "type": "url",
        },
        "dianping_list_css_selector": {
            "value": "",
            "type": "css_selector",
        },
        "dianping_detail_css_selector": {
            "value": "",
            "type": "css_selector",
        },
    },
    "workflow": {
        "open": {
            "url": "dianping_url",
            "type": "action",
        },
        "scrape": {
            "type": "action",
            "selector": "dianping_list_css_selector",
            "return": "dianping_web_shop_list_scrape_data",
        },
        "loop": {
            "iterator": "dianping_web_shop_list_scrape_data.shop",
            "type": "control",
            "open": {
                "type": "action",
                "url": "item.a",
            },
            "scrape": {
                "type": "action",
                "selector": "dianping_detail_css_selector",
                "return": "dianping_shop_detail_scrape_data",
            }
        },
        "save": {
            "type": "action",
            "data": "dianping_web_shop_list_scrape_data",
            "name": "dianping_list"
        }
    }
}
BaseWorkflow.loadConfig(config);
BaseWorkflow.work();

// BaseWorkflow.click();
