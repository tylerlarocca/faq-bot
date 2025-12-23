(function () {
  const FAQ_DATA = {
  "delays": {
    "label": "Delays",
    "subcategories": {
      "delays": {
        "label": "Delays",
        "answer": "We are diligently working to get your order completed, and will be shipping your order as soon as possible. Sorry for the delay."
      },
      "ruger-american-delays": {
        "label": "Ruger American delays",
        "answer": "Our apologies. We have experienced a shift in the action screw spacing, and are in the process of correcting the issue. Once completed, we will be shipping your order as soon as possible. Thank you for your business and patience!"
      },
      "anodize": {
        "label": "Anodize",
        "answer": "We are currently waiting on parts to come back from the anodizer. We are building orders with the parts as they come in. We should be shipping your order fairly soon. Thank you for your patience!"
      },
      "nitride": {
        "label": "Nitride",
        "answer": "We are currently waiting on the barrels to come back from the nitride processing. We are expecting them to arrive sometime soon. We will ship your order out to you promptly, once we complete our final steps for production. Be on the lookout for the email shipping notice along with your tracking information. Thanks for your business and patience!"
      },
      "order-system": {
        "label": "Order system",
        "answer": "Unfortunately, it appears that your order was one that didn't transition over to our new production software. We apologize for the delay, and we will request a rush to be placed on your order. Thank you for your business and patience!"
      },
      "reamers": {
        "label": "Reamers",
        "answer": "We are still waiting on the new reamers. We estimate 4-6 weeks to receive them, and then approximately 3-4 weeks for us to build your barrel. Sorry for the delay."
      },
      "3d-parts": {
        "label": "3D parts",
        "answer": "We are still waiting on the 3D printed parts to arrive. We are pushing as hard as we can to get the parts in to be able to ship out orders. Please hang in there!"
      },
      "manufacturing-options": {
        "label": "Manufacturing options",
        "answer": "The advertised 4 weeks, is for a basic stainless straight barrel. Any additional options add time to complete production. We promise to have your barrel completed as soon as we possibly can. Be on the lookout for your shipping notification with tracking information. Thanks!"
      },
      "order-is-complete": {
        "label": "Order is complete",
        "answer": "Your order has been completed through the manufacturing. It is currently in our que for our final processing. Be on the lookout for the email with your shipping notification and tracking information. Thanks for your business!"
      },
      "order-is-in-process": {
        "label": "Order is in process",
        "answer": "Your order has made it back from nitride, and is going through final processing. Be on the lookout for the email shipping notification and tracking information. Thank you for your business!"
      },
      "running-behind": {
        "label": "Running behind",
        "answer": "We are currently processing orders in 3-5 business days, due to all the orders. You will receive an email with your tracking information as soon as your order ships. Thanks for your patience and business!"
      },
      "shipping-status-lead-times": {
        "label": "Shipping status / Lead times",
        "answer": "We apologize for the delays. We are expecting more in 2-3 weeks. Be on the lookout for the shipping notifications with your tracking information. Thank you for your patience and support."
      }
    }
  },
  "shipping": {
    "label": "Shipping",
    "subcategories": {
      "outlier-usa-address": {
        "label": "Outlier USA address",
        "answer": "6217 TX-66, Greenville, TX 75402"
      },
      "shipping-label-3": {
        "label": "Shipping Label - #3",
        "answer": "Please see the attached return label. Print it out and secure it to the return packaging. We will process the return once received. Thank you!"
      },
      "lost-in-transit": {
        "label": "Lost in Transit",
        "answer": "According to our records, your order was shipped. We will create a replacement order for you. Your new order number is X. Hopefully this one will make it to you. Please advise if you receive the original order. Thanks for your business and support!"
      },
      "outside-the-us": {
        "label": "Outside the US",
        "answer": "Due to ITAR and EAR regulations, we are not allowed to ship outside the US or it's territories. We may possibly open dealer relations in your region in the future. Thank you for the inquiry!"
      },
      "partial": {
        "label": "Partial",
        "answer": "Your order was split, so we could send you the items that we had in stock. The remainder of your order will be processed as soon as possible. Thank you for your business and patience!"
      },
      "delivered": {
        "label": "Delivered",
        "answer": "According to our records, they indicate that your order has been delivered. Please provide any feedback you may have for this order. Thank you for your business and support!"
      },
      "tracking": {
        "label": "Tracking",
        "answer": "You should have received an email with your tracking information. Your tracking number is . Thank you for your business!!"
      },
      "my-order-shows-you-still-have-it": {
        "label": "MY ORDER SHOWS YOU STILL HAVE IT!!",
        "answer": "According to our records, your order shipped. Once the package is labeled, we put them in a cart for UPS pick up. They pick up from us daily but do not scan them. They scan them in once they reach whatever UPS facility they take them. We can tell you is that it is on the way. Thank you for your business and support."
      },
      "no-shipping-notice": {
        "label": "NO SHIPPING NOTICE",
        "answer": "Your order is still in processing. Once your order ships, you will receive an email notification with your tracking information. Thank you for your business and patience."
      },
      "ups-shows-delivered-but-no-package": {
        "label": "UPS shows delivered but no package",
        "answer": "If it's been more than 24 hours since your package was marked delivered and it still hasn't shown up, you can contact the UPS. Customers can send a service request by email to their website for a follow-up on their package. Thanks!"
      },
      "other-regions-not-listed": {
        "label": "Other regions not listed",
        "answer": "We are not permitted to ship outside the US and it's territories. We will warranty the item, but all related shipping costs, both to us and from us, will be the customers responsibility. We are required to ship to a US address only. All export laws such as ITAR and EAR are explicitly the customers responsibility, and their sole responsibility. Thank you."
      },
      "no-shipping-notice-2": {
        "label": "(NO) SHIPPING NOTICE",
        "answer": "You should have received a shipping notification. Your order has shipped. Your tracking number is . Thanks!"
      },
      "missing-items-check-packing-list": {
        "label": "Missing items / Check packing list",
        "answer": "The packing slip (which looks like a return shipping label) indicates all the items that were included in that shipment. The remainder of your order (not shown in the items list) will be shipping once we have those items back in stock. Thank you for your business and patience!"
      },
      "missing-manuals": {
        "label": "Missing Manuals",
        "answer": "We are currently working on finishing the manual. Once it is complete, it will be available on our website under the specific model product you are looking for. Thank you for your business and patience!"
      },
      "shipping-questions-canada-greenville": {
        "label": "Shipping questions\" Canada/Greenville",
        "answer": "Arken Optics HQ, and Outliers shop and warehouse, are located in Texas. We also have a new distribution center in Canada, to help increase our product flow and availability. Thanks!"
      },
      "shipping-label-cancelled": {
        "label": "Shipping label cancelled",
        "answer": "We apologize for the inconvenience. Our system had an error in reading inventory levels. As a result, it printed excess shipping labels, but did not have the stock to fill the shipments. We will ship your products as soon as possible. Thank you for your business and patience!"
      },
      "wrong-flip-its-to-tight": {
        "label": "Wrong Flip its / To Tight",
        "answer": "The flip-up covers are designed to fit very snugly to ensure optimal protection and security for your optics. Please review the video in the following link for easy instuctions of how to install. Thanks! https://www.dropbox.com/scl/fi/vao9foosyi2cwcf6i3lad/FlipItsInstallationHelp.mov?rlkey=c1tuasbtwg37hrbzvep09jigw&dl=0"
      },
      "i-bought-on-amazon": {
        "label": "I BOUGHT ON AMAZON",
        "answer": "Unfortunately, when you buy other than from us, we cannot honor the same deals. For the best customer service and pricing, please buy direct from us at www.arkenopticsusa.com Thank you!"
      },
      "amazon-fulfillment-issues": {
        "label": "Amazon fulfillment issues",
        "answer": "Sorry for the inconvenience, but we only have the information from our website sales. If you need to return for refund or exchange, you must contact Amazon. This is the process for all Amazon orders. Thank you for your support and business."
      },
      "shipping-charges": {
        "label": "Shipping charges",
        "answer": "The system is set up to process the suppressors one at a time. Each suppressor is assigned to an individual suppressor, and they will all require shipping and handling charges. Thanks!"
      },
      "shipping-notifications": {
        "label": "Shipping notifications",
        "answer": "Once your items ship, you will receive an email with your tracking information. Please keep in mind that your order may be split, due to certain items being out of stock at the time. Once your backordered items come in, they will be shipped to you promptly. Thank you for your business and support!"
      },
      "address": {
        "label": "ADDRESS",
        "answer": "Your address has been flagged by our shipping equipment and it is not showing up on Google maps either. That does not always mean it is wrong but we would appreciate it if you can check what we have and either verify it, or alert us to any changes. If it is a business, box, or suite, please let us know. If it is an apartment, we need the name of the apartments and the apartment #. You entered:. Thank you in advance."
      },
      "lost-in-transit-2": {
        "label": "Lost in transit",
        "answer": "According to our records, your order did ship. We apologize, but your order appears to have been lost in transit. Your new order number is X. Hopefully this one will get there. Should you receive the original order, please let us know. Thank you for your business and patience!!"
      },
      "stolen-not-delivered": {
        "label": "Stolen/Not delivered",
        "answer": "We regret to hear that your package has gone missing. Please file a theft claim with UPS, and / or a police report for theft. Send us a copy of the claim or the report, we can then replace the order at 50% off regular price. Again, we regret this has happened, we will do what we can to help. Thank you for your business."
      },
      "shipping-letter": {
        "label": "Shipping Letter",
        "answer": "Please see the attached return label below. The label is good for 21 days only so do not delay. Remove all accessories (rings, level, throw lever, caps) from your scope prior to return. There will be a $15.00 charge for shipping and handling on exchanges when it is a customer request not due to manufacturing or shipping error. DO NOT SEND ANY MONEY BACK WITH THE RETURN. Wait to be invoiced via email. Please use the original, or appropriate packaging for the return. We will take care of you when we receive the return. Thank you for your business and support."
      },
      "leveling-and-tracking": {
        "label": "Leveling and tracking",
        "answer": "Start by leveling the rifle from the scope rail. Once that is done, align the vertical stadia of the reticle to a plumb line. (**NOTE** Do not use the top of the turret to level the scope.) Tighten all the screws for the rings or mount in a torquing pattern. Go slow with this stage, ensuring that the reticle stays aligned with the plumb line. Once you have reached 18in/lbs of torque, you should be done. Next, ensure that the rifle is stationary, and run the turret up and down the full extent of travel, making sure the reticle stays true to the plumb line. If it does not, make adjustments to the level of the reticle. Now check the tracking with a tall target test. Our tracking error should be 2% or less."
      },
      "not-holding-can-t-set": {
        "label": "Not holding - Can't set",
        "answer": "Make sure the scope rings are properly tightened and there is no play in the scope to rings or rings to rail connections. Check your scope rail screws as well. Check your muzzle brake if you have one. Check those details, and let us know. Thank you for your support and business."
      }
    }
  },
  "international": {
    "label": "International Orders",
    "subcategories": {
      "australia": {
        "label": "Australia",
        "answer": "We are not permitted to ship outside the US and it's territories. Please contact Phil via sales@deltatactical.com.au for Australia orders, shipping, and warranty issues. Thank you."
      },
      "south-africa-unofficial": {
        "label": "South Africa (Unofficial)",
        "answer": "We are not permitted to ship outside the US and it's territories. Please contact engageoptics.co.za for South Africa orders, shipping, and warranty issues. Thank you."
      },
      "ordering-outside-of-the-us": {
        "label": "Ordering outside of the US",
        "answer": "We are not permitted to ship outside the US and it's territories. Please reach out to Arken Optics Global, for all orders, information, and warranty issues. info@arkenoptics.com"
      },
      "dealer-application-international": {
        "label": "Dealer application INTERNATIONAL",
        "answer": "Please reach out to the following link to apply: info@arkenoptics.com"
      },
      "uk-eu": {
        "label": "UK/EU",
        "answer": "We are not permitted to ship outside the US and it's territories. We are required to ship to a US address only. All export laws such as ITAR and EAR and costs associated are explicitly the customers responsibility, and must be paid with US funds. Thank you."
      }
    }
  },
  "order-changes": {
    "label": "Order Changes",
    "subcategories": {
      "please-cancel-my-order": {
        "label": "Please \"cancel\" my order",
        "answer": "Your order has been cancelled per your request, and your transaction has been refunded. Thank you for considering GetOutlier."
      },
      "please-cancel-my-order-2": {
        "label": "Please cancel my order",
        "answer": "Your order has been cancelled per your request, and your refund processed. Thank you for considering Arken Optics."
      }
    }
  },
  "payments": {
    "label": "Payments",
    "subcategories": {
      "15-charge-for-exchange": {
        "label": "$15 Charge for exchange",
        "answer": "Please see the RMA form below. Be sure to fill it out completely including your desired resolution. We will send you a prepaid return label. Only send back what you wish to return or exchange. We do charge a $15.00 processing fee for the S&H of exchanges. Thank you for your business and support. http://www.bit.ly/ArkenRMA"
      },
      "no-charge-for-warranty-issues": {
        "label": "NO CHARGE for warranty issues",
        "answer": "Please see the RMA form below. Be sure to fill it out completely including your desired resolution. We will send you a prepaid return label. Only send back what you wish to return or exchange. Thank you for your business and support. https://share.hsforms.com/1dDECXnufTgKEbqi2XsCetQ4316h"
      },
      "awaiting-payment": {
        "label": "Awaiting Payment",
        "answer": "We are trying to call you from a 903 area code to verify your information and finalize your order. Thank you, Arken Optics"
      },
      "gift-cards-prepaid-cards-split-payments": {
        "label": "Gift cards / Prepaid cards / Split payments",
        "answer": "We utilize a 3rd party payment processor. They do not accept gift cards, prepaid cards, or split payments. Sorry for the inconvenience."
      },
      "payment-received": {
        "label": "Payment received",
        "answer": "Your payment has been received and your order has been finalized. It is now awaiting processing. Thank you for your business!!"
      },
      "refund-return-policy": {
        "label": "Refund/Return Policy",
        "answer": "We have a 30 day window for returns/refunds. We can exchange the item under warranty for you if you wish. Thank you for your business and support."
      },
      "refund-processed": {
        "label": "Refund processed",
        "answer": "Your order changes have been made per your request, and your refund processed. Thank you for your business and support!"
      },
      "declined": {
        "label": "Declined",
        "answer": "We apologize, but your transaction was declined. We utilize a 3rd party payment processor. They have added extra security measures due to increased fraudulent charges. Your funds were returned immediately. Please contact your card issuer, and correct or verify your information. You may want to try a different card. We do not have control over this situation. We apologize for any inconvenience."
      }
    }
  },
  "discounts-and-rewards": {
    "label": "Discounts & Rewards",
    "subcategories": {
      "industry-discount": {
        "label": "Industry Discount",
        "answer": "We do offer an industry discount. The discount code is INDY30. Please provide an industry discount code in return, if you have one. Thank you for the inquiry!"
      },
      "no-discount-stacking": {
        "label": "No Discount Stacking",
        "answer": "You are allowed to use any of the discount codes or the rewards points, but no discounts can be combined. We are not allowed to stack multiple discounts on one order. Thanks!"
      },
      "stacking-not-allowed": {
        "label": "Stacking not allowed",
        "answer": "You are allowed to use any of the discount codes or rewards points, but no discounts can be combined. We are not allowed to stack multiple discounts on one order. Thanks!"
      },
      "how-to-apply-discount": {
        "label": "How to apply discount",
        "answer": "Add all the items into your shopping bag that you are wanting. Click on Go To Checkout. Down close to the bottom, right under the order total dollar amount, is the line that says \"Discount or Reward Code? Click HERE to redeem\". Click there, and enter the discount code, and hit apply. You should be good to go. Please keep in mind that you are not allowed to combine rewards and other discount codes together. Thanks!"
      },
      "how-to-reclaim-rewards-points": {
        "label": "How to reclaim rewards points",
        "answer": "Points are associated with the discount code received. If you wish to place the points back in your account, simply follow the instructions in the link, through number 4. Thanks! https://www.forum.arkenopticsusa.com/forum/common-questions/reclaiming-rewards-points-that-were-unused"
      },
      "mil-leo-discount": {
        "label": "MIL/LEO DISCOUNT",
        "answer": "We do not have a broad discount program in place, but we do price our optics at the best price we can offer for everyone. However, we do provide special pricing to Mil/LEO for 'official use' purposes. We simply ask to receive a signed document, on department letterhead, stating that the request falls under this premise. Approved parties receive 30% off everything except the SH4 GENII lineup. Thank you for your interest in Arken Optics!"
      },
      "sign-on-issues-points-issues": {
        "label": "Sign on issues / Points issues",
        "answer": "Yes, we aware that you can't log into the website, we are currently working on the issue. If you place an order as a guest, and use your account email address, you will get your points added to your account correctly. We have verified this ourselves, so you can rest assured your points are in good hands."
      }
    }
  },
  "barrels": {
    "label": "Barrels",
    "subcategories": {
      "backdraft": {
        "label": "Backdraft",
        "answer": "Rest assured your order is in good standing. We are diligently working toward completing everyone's order as quickly as possible. Thank you for your business and patience!"
      },
      "breakin-process": {
        "label": "Breakin process",
        "answer": "With our hand lapping process and finishing, you only need to clean it to your liking, and go shoot! Thanks!!"
      },
      "specifications": {
        "label": "Specifications",
        "answer": "All of our barrels are 1.2\"OD straight bull or MTU contour, unshouldered, and have 5/8-24TPI threading for a muzzle brake or suppressor. All of our barrels also come with the proprietary barrel nut with your purchase. Thanks!"
      },
      "types-chambers-not-shown": {
        "label": "Types (chambers) not shown",
        "answer": "Currently, we only offer barrels in the calibers listed on the website. The listing for cartridges is based on our current tooling inventory. We will hopefully be adding more later on. Sorry for the inconvenience. Thank you for considering OutlierUSA!"
      },
      "nut-size": {
        "label": "Nut size",
        "answer": "Our proprietary barrel nuts are 1.25\" across the flats. You can use any 1.25\" open end wrench or straight claw crows foot to the install the barrel. To set the headspace, make certain you have a known set of good head space gauges. Thanks!"
      },
      "nut-size-savage-large": {
        "label": "Nut size (Savage Large)",
        "answer": "Our Savage Large proprietary barrel nuts are 1.30\" across the flats. You can use any 1.30\" open end wrench or straight claw crows foot to the install the barrel. To set the headspace, make certain that you have a known good set of head space gauges. Thanks!"
      },
      "remanufacturing-a-barrel-order": {
        "label": "REMANUFACTURING A BARREL ORDER",
        "answer": "For a new replacement barrel request, we charge a $65 remanufacturing fee, along with a $35 shipping and handling fee. Thank you for chosing Outlier."
      },
      "barrels": {
        "label": "Barrels",
        "answer": "We are currently producing the Remington barrels at this time. We estimate starting on the Savage barrels in approximately 3-4 weeks. Thank you for your business and patience!"
      },
      "barrels-in-process": {
        "label": "barrels in process",
        "answer": "Your order is in process and unable to change it. Before proceeding with your change/cancellation, we must ask you to please go to our returns policy page on the website, under INFORMATION, and read over the details of said return. Once you have read and understood the return policy, please reply to the email, and let us know if you wish to proceed. Thank you for your business and support!"
      },
      "savage-small-or-large": {
        "label": "Savage Small or Large",
        "answer": "Most all Savage rifles use the Savage Small Shank. You can measure the barrel nut you have now to determine which one it is. The Small Shank barrel is 1.055\", and the nut is 7/8\" wide, while the Large Shank barrel is 1.120\", and the nut is 5/8\" wide. Please verify and order accordingly. Your rifle will most likely be the Savage Small Shank. Thanks!"
      },
      "barrel-nut": {
        "label": "Barrel nut",
        "answer": "With a barrel nut system, typically 40-55 ft/lbs will work for most all receivers. We recommend the torque per the reciever manufacturers recommendations."
      },
      "outlier-barrels-and-chassis-questions": {
        "label": "Outlier barrels and chassis questions...",
        "answer": "Please reach out to our sister company: info@getoutlier.com"
      }
    }
  },
  "brakes": {
    "label": "Brakes",
    "subcategories": {
      "manufacturing-times": {
        "label": "Manufacturing times",
        "answer": "We are currently machining the brakes now. We estimate shipping to begin in 1 week for the stainless, and approximately another 2-3 weeks for the nitride version. Thanks!"
      }
    }
  },
  "suppressors": {
    "label": "Suppressors",
    "subcategories": {
      "suppressor-adapters": {
        "label": "Suppressor adapters",
        "answer": "For our backdraft barrels, the mating adapter is proprietary. The HUB adapter has vent ports to allow it to work with our suppressor. We will be introducing a few other adapters in the future. Thanks for the inquiry!"
      },
      "tax-exempt-form-and-process": {
        "label": "Tax Exempt Form and Process",
        "answer": "We can start the process by providing the following. We will need a signed document, on department letterhead, that states it's purpose is for duty, not personal use. Go to our website, and register the email address you wish to use for all purchases. In addition, please fill out the form from the link below, to the fullest extent possible for our records. Once those steps have been accomplished, we will then be able to offer you the MIL/LEO discount, as well as change your tax status to exempt. Thank you for the inquiry!"
      },
      "sku-identifiers-for-rma-forms": {
        "label": "SKU identifiers for RMA forms",
        "answer": "RTS - Return to stock"
      },
      "detailed-information": {
        "label": "Detailed information",
        "answer": "Please provide the full official name of the match, and the expected number of shooters. Once we get this information, we will be able to help out with the match. Thanks for choosing Arken and Outlier!"
      },
      "suppressors": {
        "label": "Suppressors",
        "answer": "Your rebate code will be lasered onto the barrel itself. Once you receive your barrel, you can then use the code on our website, backdraftsuppressors.com. Thank you for your business and patience!"
      },
      "adapter-fitment": {
        "label": "Adapter fitment",
        "answer": "All of our HUB's fit our suppressors. It is dependent on the mating part that determines the correct adapter. For standard barrels, you will need either the 1/2-28TPI, or 5/8-24TPI direct thread adapter. For the backdraft system, you will choose either the 1\"OD or 1.2\"OD adapter. 1\"OD adapter is for the AR9 and AR15's. The 1.2\"OD adapters are for the backdraft barrels and the AR10. Thanks!"
      },
      "suppressor-rebate-code": {
        "label": "Suppressor rebate code",
        "answer": "We appreciate you reaching out. Your rebate code is RS-. Go to our website, backdraftsuppressors.com, and enter the code in the redeem coupon box at checkout. Simply follow the prompted directions. Thank you for your business and support!"
      },
      "suppressor-rebate-code-in-the-box": {
        "label": "Suppressor rebate code in the box",
        "answer": "Please double check inside the box that your scope came in. You should find a card with your rebate code on it. Go to the backdraftsuppressors.com website, and enter the code in the redeem coupon box at checkout. Simply follow the prompted directions. Thanks!"
      }
    }
  },
  "chassis": {
    "label": "Chassis",
    "subcategories": {
      "chassis-assembly-video": {
        "label": "Chassis assembly video",
        "answer": "https://www.dropbox.com/scl/fi/z7na8odtn9cszail6v6g5/ChassisAssembly.MOV?rlkey=ohgy4g80qer7na1m5613cyf7y&st=lzld50sb&dl=0"
      },
      "chassis-compatible-with": {
        "label": "Chassis compatible with",
        "answer": "All of our MC's are designed to be used with AICS magazines, AR type carbine buffer tubes, both commercial and Mil-Spec, and AR type grips without beavertail. Thanks for the inquiry!"
      },
      "chassis-for-rimfire-rifles": {
        "label": "Chassis for rimfire rifles",
        "answer": "Our chassis will work with rimfire rifles that match the common Remington 700 footprint. There may be some issues with a factory magazine that is curved, as our magwell doesn't have a relief slot for such a magzine. The Bergara and RimX receivers that utilize the AICS pattern rimfire magazine, work extremely well."
      },
      "chassis-for-left-hand-rifles": {
        "label": "Chassis for left hand rifles",
        "answer": "At this time, we are not making any left handed special requests. We are only producing items found on our website. We are working to increase the available items. Please check back often. Thanks!"
      },
      "chassis-to-pic-rail-adapter": {
        "label": "Chassis to Pic Rail adapter",
        "answer": "https://albertatacticalrifle.com/product/buffer-tube-to-pic-rail-adapter/"
      },
      "chassis-to-pic-rail-adapter-2": {
        "label": "Chassis to Pic Rail adapter",
        "answer": "https://knsprecisioninc.com/ar-mcx-stock-adapter-with-flange/"
      },
      "handrail-compatibility": {
        "label": "Handrail compatibility",
        "answer": "At this time, our chassis are only compatible with our proprietary handrails. We may change the design later on to accommodate other brands handrails or guards. Thanks for the inquiry!"
      },
      "pickup-my-order": {
        "label": "Pickup my order",
        "answer": "Unfortunately, our facility is a manufacturing, shipping, and receiving facility only, We do not have a store front in which to do business. Sorry for the inconvenience."
      },
      "chassis": {
        "label": "Chassis",
        "answer": "We are currently running about 7-10 days behind due to the sales and holidays. We will ship your order as soon as possible. Be on the lookout for the shipping notification in your email with tracking. Thanks!"
      }
    }
  },
  "dealers": {
    "label": "Dealers",
    "subcategories": {
      "dealer-application-usa": {
        "label": "Dealer application USA",
        "answer": "Please reach out to the following link to apply: christopher.watkins@getoutlier.com"
      },
      "temp-dealer-message-for-craig": {
        "label": "Temp dealer message for Craig",
        "answer": "Please provide a shipping address and customer name for this return. This is the retail side but I am working the dealer returns until we can replace James. The only problem is that I cannot see or have access to dealer orders."
      },
      "ffl-sot-info-not-in-database": {
        "label": "FFL/SOT info not in database",
        "answer": "Please obtain a copy of the FFL/SOT that you are wishing to use, and email the information to \"license@masterffl.com\", as it is their database that we are utilizing. Thanks!"
      },
      "ffl-sot": {
        "label": "FFL/SOT",
        "answer": "Please forward the FFL/SOT information to license@masterffl.com. They will input the information to their database. Thanks!"
      },
      "ffl-sot-not-listed": {
        "label": "FFL/SOT not listed",
        "answer": "Please double check that the filters are set correctly with your search. If they are correct, and you still can't locate the specific FFL/SOT, they will either need to send their information to licensing@masterffl.com, or you will need to choose a different FFL/SOT close to your area. Thanks!"
      },
      "dealer-application-usa-2": {
        "label": "Dealer application USA",
        "answer": "Please reach out to the following link to apply. https://dealers.arkenopticsusa.com/"
      },
      "dealer-location-inquiry": {
        "label": "Dealer location inquiry",
        "answer": "We do not currently have a dealer listing by area. We are working on that, but we are not there just yet. There are several groups on Facebook, and Arken Optics USA Info has begun requesting dealer information on locations. You can check there to see if someone has been listed in your area yet."
      }
    }
  },
  "returns-and-warranty": {
    "label": "Returns & Warranty",
    "subcategories": {
      "shootout-guarantee": {
        "label": "Shootout Guarantee",
        "answer": "The Shootout Guarantee, is exactly as it states. If you chose the nitride option, your barrel will be replaced if you ever shoot it out! The shootout part, is based on the barrel not being able to hold to our sub-MOA guarantee. If it won't hold that accuracy, you get a new one for free!"
      },
      "return-form-2": {
        "label": "Return Form - #2",
        "answer": "Please see the following form to start the return process. This form will report to GetOutlier for your return. Thank you. https://share.hsforms.com/1XMQ7-T6oQo2SZWtDXuy5Ngc5bz3"
      },
      "return-of-lh6": {
        "label": "Return of LH6",
        "answer": "We apologize for the error. Please fill out the RMA form for the return of the scope. Please verify that the accessories you received are of the correct size of mount is the 34mm. Only send the scope back, keep all accessories, and we will send you the correct scope as soon as possible. Thank you for your business and we apologize again for the error. http://www.bit.ly/ArkenRMA"
      },
      "warranty-parts-fulfillment": {
        "label": "Warranty Parts/Fulfillment",
        "answer": "WARRANTY PARTS"
      },
      "zulus-issues-programming-warranty": {
        "label": "Zulus issues/programming/warranty",
        "answer": "DNT Optics now handles all digital products for Arken Optics. Please email DNT Optics at info@dntoptics.com. Thanks!"
      }
    }
  },
  "technical": {
    "label": "Technical",
    "subcategories": {
      "screws": {
        "label": "Screws",
        "answer": "Rail to chassis: 3/16\" Allen - 30 in/lbs - Black screws with the conical shape - go into sides of handrail - Qty=2"
      },
      "screws-2": {
        "label": "Screws",
        "answer": "Rail to chassis: 3/16\" Allen - 30 in/lbs - Black screws with the round head - go into bottom of handrail - Qty=2"
      },
      "screws-3": {
        "label": "Screws",
        "answer": "Cheek Riser: Black Thumb screws - Finger tighten only - Qty=3"
      },
      "screws-4": {
        "label": "Screws",
        "answer": "Grip screw: 5/32\" Allen - 20 in/lbs - Silver 3/4\" long - Qty=1"
      },
      "screws-5": {
        "label": "Screws",
        "answer": "Buttstock screws: 1/8\" Allen -10 in/lbs - 1/4\" long - Qty=9 (One used for the stock tube to chassis mating point)"
      },
      "screws-6": {
        "label": "Screws",
        "answer": "Action screws: Black 1/4-28 x 1/2\" & 1/4-28 x 2\" - Per manufacturers recommendations (typically 40-75 in/lbs) - Qty=1 & 1"
      },
      "taking-scopes-out-of-the-us": {
        "label": "Taking scopes out of the US",
        "answer": "Due to ITAR and EAR regulations, we are not permitted to ship outside the US or it's territories. You may purchase the scope, send it to a US address, but you will still be under the ITAR/EAR regulations if you try taking it out of the country. If you choose to proceed to make this purchase, you are doing so at your own risk. Arken Optics will not be held responsible or liable for any refunds."
      },
      "taking-scopes-out-of-the-greenville-office": {
        "label": "Taking scopes out of the Greenville Office",
        "answer": "Our facility in Greenville is for shipping, receiving, and manufacturing only. We do not have a store front in which to conduct business. Our insurance provider restricts us from having customers in the manufacturing areas. Sorry for the inconvenience."
      },
      "setting-scope-and-rifle-to-your-eye": {
        "label": "Setting scope and rifle to your eye",
        "answer": "You will need to make sure that you properly set up your rifle to fit you. You will need to close your eyes, and get comfortable behind the rifle, totally relaxed. Once you open your eye, you should have full complete view of the glass. If not, make the necessary adjustments to achieve this. Either raise or lower your cheek weld, or move the scope forward or rearward to get the full view. Spend the time in the set up, to ensure that you have the correct eye relief, sight picture, and bone support, and not muscle support. This will also help to prevent eye and neck fatigue and strain."
      },
      "azs-lock-screw-dims-brass": {
        "label": "AZS LOCK SCREW DIMS (Brass)",
        "answer": "M4*5 BRASS"
      },
      "azs-screw": {
        "label": "AZS SCREW",
        "answer": "M4*12 with the step down base that touches the stop bar on the plate."
      },
      "bubble-level-screw": {
        "label": "Bubble level screw",
        "answer": "SCREW LEVEL"
      },
      "throw-lever-screw": {
        "label": "Throw lever screw",
        "answer": "SCREW TL34"
      },
      "allen-wrench-for-ring-and-base-screws": {
        "label": "Allen wrench for ring and base screws",
        "answer": "ALLEN T25"
      },
      "allen-wrench-for-turret-screws": {
        "label": "Allen wrench for turret screws",
        "answer": "ALLEN"
      },
      "sunshade-orders": {
        "label": "SUNSHADE ORDERS",
        "answer": "SH4G2-SS, EPL4-44SS 50SS, EP5-SS"
      },
      "screw-ring-base-4mm-x-70-x-15-8-long": {
        "label": "Screw ring base (4mm X.70 X 15.8 long)",
        "answer": "SRB"
      },
      "screw-mount-base-4mm-x-70-x-19-8-long": {
        "label": "Screw mount base (4mm X.70 X 19.8 long)",
        "answer": "SMB"
      },
      "cap-screws-4mm-x-70-x-13-8-long": {
        "label": "Cap Screws ( 4mm X .70 X 13.8 long)",
        "answer": "SRC"
      },
      "scope-screw-pack": {
        "label": "Scope screw pack",
        "answer": "SSP"
      },
      "zulus-mounting-screws": {
        "label": "Zulus mounting screws",
        "answer": "PMS"
      },
      "scope-battery": {
        "label": "Scope battery",
        "answer": "BAT Battery: CR2032 Illumination"
      },
      "scope-ring-base": {
        "label": "Scope ring base",
        "answer": "CLAMP Clamp: 30mm 34mm High Med Low"
      },
      "scope-objective-od-s-in-mm-and-inches": {
        "label": "Scope Objective OD's in mm and inches",
        "answer": "SH4 58.9mm/2.32\" - SH4J 58.0mm/2.28\" - EP5 66.1mm/2.60\" - EP5G2 64.1mm/2.52\" - EPL4 44mm 52.0mm/2.04\" - EPL4 50mm 58.0mm/2.28\" - EP8 34.0mm/1.33\""
      },
      "scope-ocular-od-s-in-mm-and-inches": {
        "label": "Scope Ocular OD's in mm and inches",
        "answer": "SH4, EPL4, EP5 43.5mm/1.71\". - LH4, SH4J, EP5G2 44.5mm/1.75\" - EP8 46.9mm/1.84\""
      },
      "scope-ring-mount-material": {
        "label": "Scope Ring/Mount Material",
        "answer": "Aerospace 7075 T6"
      },
      "torque-values": {
        "label": "TORQUE VALUES",
        "answer": "Caps for both rings and mounts = 18 in/lbs"
      },
      "zero-stop-plate-9mm-screws": {
        "label": "Zero Stop plate (.9mm screws)",
        "answer": "Not Offered to customers"
      },
      "zulus-mount-screws-zulus-to-mount": {
        "label": "Zulus mount screws (Zulus to mount)",
        "answer": "PMS SCREWS"
      },
      "caliber-capability": {
        "label": "CALIBER CAPABILITY",
        "answer": "Our scopes are rated to handle up to 50 BMG, and can also take on the scope eating SCAR17! If you can handle the recoil, the scope can as well!! Thank you for your interest in Arken Optics USA!!"
      },
      "caps-are-difficult-to-install": {
        "label": "Caps are difficult to install",
        "answer": "The caps are supposed to be tight, to prevent them from moving when you use them. There is a short installation video link attached. Check it out to see if it helps! https://www.dropbox.com/scl/fi/vao9foosyi2cwcf6i3lad/FlipItsInstallationHelp.mov?rlkey=c1tuasbtwg37hrbzvep09jigw&dl=0"
      },
      "ep-vs-sh-difference": {
        "label": "EP vs SH DIFFERENCE",
        "answer": "The EP series has Japanese ED glass and the SH series has Chinese HD glass, with the exception of the SH4J. The EP series also has 10mil/revolution and the SH, and the new EPL4 has 8mil/rev. All of our products are manufactured in our facility in China, with the exception of the Japanese ED glass. For more information, check out the specifications on our website at www.arkenopticsusa.com"
      },
      "ep8-bdc-info": {
        "label": "EP8 BDC info",
        "answer": "The KLBox was designed for the 77gr 5.56, and the 147gr 7.62 projectiles. I am not certain on the barrel length for the true velocities in ranging. Stay tuned!"
      },
      "focus-issues-with-ep8-lh6": {
        "label": "Focus Issues with EP8, LH6",
        "answer": "Your optic should be very clear. Make sure you have set the diopter to your eye first. You can do this by focusing the scope on max power. Start with the diopter turned all the way in, and then backing it out a little at a time. Go \"slow\" with these adjustments, as the diopter is touchy on the adjustments. Look through the scope to see if the reticle is instantly clear. If not, make a slight adjustment, and check the clarity again. Don't look through the scope for very long, as your eyes will make the adjustments for you. Once the reticle is crystal clear instantly, then you should be good to go. Let me know if you need further assistance. Thank you for your support and business."
      },
      "illumination-hard-to-turn": {
        "label": "Illumination hard to turn",
        "answer": "We have seen that sometimes the illumination is hard to turn from our tight manufacturing tolerances. A simple fix, is to heat up the knob and surrounding area with a hairdryer. Twist it a few times, and it will work itself free and will operate smoothly after that. Give it a try and let us know. Thanks!"
      },
      "magnification-ring-stuck": {
        "label": "Magnification ring stuck",
        "answer": "We have seen that sometimes the magnification ring is hard to turn from our tight manufacturing tolerances. A simple fix, is to heat up the ring and surrounding area with a hairdryer. Twist it a few times, and it will work itself free and will operate smoothly after that. Give it a try and let us know. Thanks!"
      },
      "parallax-clicking-parallax-in-a-bind": {
        "label": "Parallax clicking / Parallax in a bind",
        "answer": "The parallax may be in a bind. Move the front ring toward the objective bell as far as possible. Ensure that you don't over torque the ring. This should free up the parallax tube inside the scope, to be able to move freely. Give it a try and let us know."
      },
      "parallax-numbers-don-t-line-up": {
        "label": "Parallax numbers don't line up",
        "answer": "Make sure you have set the diopter correctly for your eyes first, that may solve the issue. The numbers are for reference only, and are not intended to be used as a rangefinder. There are many variables that will make the scope show different numbers for different people. Please check it and let us know."
      },
      "water-proofing-building-standard": {
        "label": "Water proofing building standard",
        "answer": "We utilize the IPX7 Standard for water proofing."
      },
      "windage-issues": {
        "label": "WINDAGE ISSUES",
        "answer": "There is a possibility that the turret wasn't centered from the factory. Count your total clicks to each limit, and then take that number and divide by 2. Take that number, and count back that number of clicks from either limit. Then slip the turret completely off and reinstall it to zero. Then zero your scope again, that should fix the issue. Let us know if you need any further assistance. Thank you for your support and business."
      },
      "zerostop-set-instructions": {
        "label": "ZeroStop set instructions",
        "answer": "Back out the lock and set screws for the ZeroStop. Sight in your rifle. Loosen the (3) turret perimeter screws, and set the turret on -0-. Tighten the (3) turret perimeter screws. Turn the turret 3 clicks up from -0-. Turn the ZeroStop set screw down until it makes contact with the ZeroStop plate. Back the screw out 1 full turn. Tighten the ZeroStop lock screw. Now turn the turret back to -0-. You should feel a positive stop, and it should be dead on -0-. Let me know if that works for you. I have attached a short video for you as reference. Thanks! https://www.dropbox.com/s/ajbzhitsx4cfllf/ZeroStop.mov?dl=0"
      },
      "ep5-threads": {
        "label": "EP5 threads",
        "answer": "M61 X 0.75mm"
      },
      "ep5g2-threads": {
        "label": "EP5G2 threads",
        "answer": "M59 X 0.75mm"
      },
      "ep8-threads": {
        "label": "EP8 threads",
        "answer": "M30* 0.75mm"
      },
      "epl4-threads-44mm": {
        "label": "EPL4 threads - 44mm",
        "answer": "44mm = M48 x 0.75mm"
      },
      "epl4-threads-50mm": {
        "label": "EPL4 threads - 50mm",
        "answer": "50mm = M54 x 0.60mm"
      },
      "lh4-threads-44mm": {
        "label": "LH4 threads - 44mm",
        "answer": "44mm = M48 x 0.75mm"
      },
      "lh4-threads-50mm": {
        "label": "LH4 threads - 50mm",
        "answer": "50mm = M54 x 0.60mm"
      },
      "sh4-threads": {
        "label": "SH4 threads",
        "answer": "M57 X 0.75mm"
      },
      "sh4j-threads": {
        "label": "SH4J threads",
        "answer": "M54 X 0.6mm"
      },
      "screws-loose": {
        "label": "SCREWS LOOSE",
        "answer": "We highly recommend using Vibra-Tite Vc3, or Vibra-Tite 122. Vibra-Tite Vc3 and 122 are specifically designed for shock/vibration type applications. Thanks!"
      }
    }
  },
  "general": {
    "label": "General",
    "subcategories": {
      "abandoned-cart-back-in-stock-email": {
        "label": "Abandoned Cart/Back In Stock Email",
        "answer": "We apologize for the error in the email. We are aware that the email is being sent out by mistake, and are working to correct the issue. Sorry for any inconvenience this may have caused. Thank you for your business and support."
      },
      "mil-leo-short-answer": {
        "label": "MIL/LEO short answer",
        "answer": "We offer an \"Official Use Only\" discount for Mil/LEO. We will need a signed document, on department letterhead, that states it's purpose is for duty, not personal use. Thanks!"
      },
      "order-not-found": {
        "label": "ORDER NOT FOUND",
        "answer": "We have received your return but can't find any previous order associated with your name or email address. Please reply with your shipping address so we can get you taken care of asap. Thank you got your business!"
      },
      "please-change-my-order": {
        "label": "Please change my order",
        "answer": "Your order has been updated per the information you provided. Thank you for your business!"
      },
      "replacement-message": {
        "label": "Replacement Message",
        "answer": "We received your return today and have created the replacement order for you. Thank you, as always, for your business!"
      },
      "sponsored-shooters": {
        "label": "Sponsored shooters",
        "answer": "We don't have a sponsored shooter program at this time. We hope to be able to add some additional programs in the future. We do recommend that you apply to be a dealer. You don't have to stock any products, and you get paid for every sale. Make a few sales, and your stuff is basically free! Please reach out to the following link to apply: https://arkendealers.com/become-an-arken-optics-dealerThanks for the inquiry."
      },
      "tax-calculator": {
        "label": "Tax Calculator",
        "answer": "https://www.taxjar.com/sales-tax-calculator"
      },
      "tax-internet-other-taxes": {
        "label": "Tax Internet/Other taxes",
        "answer": "We are now required to charge for any state, county, and local taxes as outlined in the new internet tax schedules. Thanks!"
      },
      "upgrade-after-30-days": {
        "label": "Upgrade after 30 days",
        "answer": "Unfortunately we can not do that. Returns for upgrades are strictly limited to within 30 days of the customer receiving the original order. We do not take trade ins, as we don't sell used products. We hope you understand. Sorry for the inconvenience."
      },
      "remote-work-reply": {
        "label": "Remote work reply",
        "answer": "Please double check the email address that you are trying to reach. You have reached Arken Optics USA customer service. We do not have any remote work programs, nor do we offer any outside work due to the strict privacy of our production processes. Thanks."
      },
      "looking-for-work": {
        "label": "Looking for work",
        "answer": "If you could please forward a current resume, we will be happy to forward it on the powers that be. Thanks!"
      },
      "how-does-the-site-work-and-what-do-i-order": {
        "label": "How does the site work and what do I order?",
        "answer": "There is a process on our website (Backdraft Suppressors) that will have you fill out what SOT you would like the suppressor sent to. The $200 tax stamp will still be in effect until January 1st, 2026 to our knowledge, however, we are talking about the Government which is shut down. Right now they aren't processing any suppressor paperwork to my knowledge. So our hub mount you can get in either 5/8x24 or 1/2x28. Or you can get a direct thread in either of those thread pitches. So all in all customers will have 4 options for their mounting choice, which is an option under adapters on the website to choose. The suppressor doesn't come with the mount. If you have a back draft barrel then you would choose 1 of 2 options for the hub adaptor proprietary to work with our back draft barrels. Hope this all makes sense to you. Thank you for your support."
      },
      "battery-cap": {
        "label": "BATTERY CAP",
        "answer": "BAT30 & BAT34 (EP8 & LH6 uses BAT30)"
      },
      "battery-install": {
        "label": "BATTERY INSTALL",
        "answer": "The battery goes in the very end of the parallax knob. You have to hold the parallax knob from turning and twist off the cap at the end to install the battery. The positive side faces out when you install the battery. Thank you for your support and business."
      },
      "illum-battery": {
        "label": "Illum/battery",
        "answer": "We have seen that sometimes the prongs on the lid sometimes need to be pushed down, bent out, or rotated slightly. Also if you take like a q-tip and clean out the cap and battery compartment that will sometimes make it work better. Let me know if that improves the illumination for you."
      }
    }
  },
  "info": {
    "label": "info",
    "subcategories": {
      "cip-receiver-modifications": {
        "label": "CIP Receiver Modifications",
        "answer": "https://www.snipershide.com/shooting/threads/700-long-action-cip.6922197/"
      },
      "email-under-construction": {
        "label": "Email under construction",
        "answer": "Our email system is still under construction. We apologize that the form you used was sent off out into \"lala\" land. Please reply back to this email address for all correspondence. Thanks!"
      },
      "invoices": {
        "label": "Invoices",
        "answer": "Be on the lookout for the invoice. Once it is paid, reply back here and let me know, and we will finish processing your order. Thanks!"
      },
      "lookout-for-notification": {
        "label": "Lookout for notification",
        "answer": "Be on the lookout for the email with your shipping notification and tracking information. Thank you for your business and patience!"
      },
      "magazine-catch-installation": {
        "label": "Magazine Catch Installation",
        "answer": "https://www.dropbox.com/scl/fi/t5qqkwgdnal8x9bf8s6u8/MagCatchInstall.mov?rlkey=waypizmev51p4txrm1j8dg6wd&st=0of7ntw6&dl=0"
      },
      "mil-leo30": {
        "label": "MIL/LEO30",
        "answer": "We offer an \"Official Use Only\" discount for Mil/LEO. We will need a signed document, on department letterhead, that states it's purpose is for duty, not personal use. Thanks!"
      },
      "order-didn-t-go-through": {
        "label": "Order didn't go through",
        "answer": "Our payment processor denied the transaction. The funds were returned immediately. Your financial institution will typically hold the funds for 3-5 business days to process back to your account. Sorry for the inconvenience."
      },
      "order-didn-t-qualify-for-rebate": {
        "label": "Order didn't qualify for rebate",
        "answer": "Our apologies. Upon looking closer at your order, it did not meet the criteria for the suppressor rebate. The order total must be at least $500, or have been a backdraft barrel, neither of which your order has. We apologize for the inconvenience."
      },
      "seal-1-clp-plus": {
        "label": "SEAL 1 CLP Plus",
        "answer": "SEAL 1 CLP Plus can be used for a variety of purposes. It dissolves carbon on contact, reducing cleaning time and making it easier to clean guns in the future. Plus it works as a lubrication for installation, and creates a barrier that protects against copper, lead, sand, dust, and dirt and rust."
      },
      "sponsored-shooters": {
        "label": "Sponsored shooters",
        "answer": "We do not have a sponsored shooter program at this time. We hope to be able to add some additional programs in the future. We do recommend that you apply to be a dealer. You don't have to stock any products, and you get paid for every sale. Make a few sales, and your stuff is basically free! Please reach out to the following link to apply: https://arkendealers.com/become-an-arken-optics-dealerThanks for the inquiry."
      },
      "tax-on-orders": {
        "label": "Tax on orders",
        "answer": "https://www.taxjar.com/sales-tax-calculator"
      },
      "twist-rate-info": {
        "label": "Twist rate info",
        "answer": "Overstabilization is not truly an issue with modern projectiles. While some lighter projectiles may need less twist, the higher twist won't hurt anything. If you get the barrel, and you don't like the performance, you can return it within 30 days for a refund. We are currently only set up to offer the twist rates as shown on the website. Thanks for the inquiry!"
      },
      "stingerworx-reply": {
        "label": "Stingerworx reply",
        "answer": "Please reach out to Stingerworx Suppressors directly for any additional information, at sales@stingerworx.com. Thanks!"
      },
      "outlier-remote-working-reply": {
        "label": "Outlier remote working reply",
        "answer": "We do not have any records in our system for your name or email address. Please double check the email address that you are trying to reach. You have reached OutlierUSA customer service.WE ARE NOT OUTLIER.AI. We do not have any remote work programs, nor do we offer any outside work due to the strict privacy of our production processes. Thanks."
      }
    }
  },
  "discount": {
    "label": "discount",
    "subcategories": {
      "how-to-apply": {
        "label": "How to apply",
        "answer": "Add all the items into your shopping bag that you are wanting. Click on Go To Checkout. Down close to the bottom, right under the order total dollar amount, is the line that says \"Discount or Reward Code? Click HERE to redeem\". Click there, and enter the discount code, and hit apply. You should be good to go. Please keep in mind that you are not allowed to combine rewards and other discount codes together. Thanks!"
      }
    }
  },
  "magazine": {
    "label": "magazine",
    "subcategories": {
      "3-0-223-ai-mdt-metal-and-poly": {
        "label": "3.0\" .223(AI) MDT Metal & Poly",
        "answer": "https://mdttac.com/us/223"
      },
      "3-0-6mm-arc-mdt-metal": {
        "label": "3.0\" 6mm ARC MDT Metal",
        "answer": "https://mdttac.com/6mm-arc-mdt-metal-magazine-10-rnd/"
      },
      "3-0-308w-accurate-metal": {
        "label": "3.0\" 308W Accurate Metal",
        "answer": "https://accurate-mag.com/shop/magazines/shortactionaics/308-winchester-7-62x51mm-dssf-magazine/"
      },
      "3-0-308w-mdt-metal": {
        "label": "3.0\" 308W MDT Metal",
        "answer": "https://mdttac.com/us/308-6-5-creedmoor"
      },
      "3-56-30-06-mdt-metal": {
        "label": "3.56\" .30-06 MDT Metal",
        "answer": "https://mdttac.com/30-06-mdt-metal-magazine/"
      },
      "3-56-300wsm-6-5prc-mdt": {
        "label": "3.56\" 300WSM / 6.5PRC MDT",
        "answer": "https://mdttac.com/us/300-wsm-6-5-prc-mdt-metal-magazine-med-5-rnd"
      },
      "3-715-300wm-7mm-mag-accurate": {
        "label": "3.715\" 300WM / 7MM Mag Accurate",
        "answer": "https://accurate-mag.com/shop/magazines/longactionaics/300-win-mag-sssf-magazine/"
      },
      "3-715-300wm-7mm-mag-mdt": {
        "label": "3.715\" 300WM / 7MM Mag MDT",
        "answer": "https://mdttac.com/us/300wm-mdt-metal-aics-magazine"
      },
      "3-715-300wsm-6-5prc-accurate": {
        "label": "3.715\" 300WSM / 6.5PRC Accurate",
        "answer": "https://accurate-mag.com/shop/magazines/shortactionaics/300-winchester-short-magnum-dssf-magazine/"
      },
      "3-715-300wsm-6-5prc-mdt": {
        "label": "3.715\" 300WSM / 6.5PRC MDT",
        "answer": "https://mdttac.com/300-wsm-6-5-prc-mdt-metal-magazine-med-5-rnd/"
      },
      "3-715-30-06-accurate-metal": {
        "label": "3.715\" .30-06 Accurate Metal",
        "answer": "https://accurate-mag.com/shop/magazines/longactionaics/30-06-springfield-sssf-magazine/"
      },
      "3-715-30-06-mdt-metal": {
        "label": "3.715\" .30-06 MDT Metal",
        "answer": "https://mdttac.com/30-06-mdt-metal-magazine/"
      },
      "3-85-300prc-7prc-mdt-metal": {
        "label": "3.85\" 300PRC / 7PRC MDT Metal",
        "answer": "https://mdttac.com/300prc-mdt-metal-cip-magazine/"
      },
      "3-85-300-ultramag-accurate-cip": {
        "label": "3.85\" 300 UltraMag Accurate (CIP)",
        "answer": "https://accurate-mag.com/shop/magazines/longactionaics/300-remington-ultra-mag-sssf-magazine/"
      },
      "3-85-300-weatherby-magnum-cip": {
        "label": "3.85\" 300 Weatherby Magnum (CIP)",
        "answer": "https://mdttac.com/300-weatherby-mdt-cip-la-polymer-magazine-3-rnd/"
      },
      "l3i-design-solutions-rimfire": {
        "label": "L3I Design Solutions - Rimfire",
        "answer": "https://l3idesignsolutions.com/product/700-elite-rimfire-magazine/"
      },
      "what-we-use": {
        "label": "What we use",
        "answer": "Our chassis was designed around the Accurate Mag AICS steel magazine, and the MDT magazines also work extremely well. Thanks for the inquiry!"
      }
    }
  },
  "match": {
    "label": "match",
    "subcategories": {
      "order-certificate-info-request": {
        "label": "Order/Certificate info request",
        "answer": "Thank you for choosing our Match Certificate! Please go to the website and create the order that you would like for your barrel. Then take a screen shot of your order information, and send it to us. We will us this information to ensure that we get your order corect. Once we have that information, we will create the order for you and send you the onvoice if one is needed. Thank you again for choosing Outlier USA!"
      },
      "sponsor-certificate-communication": {
        "label": "Sponsor/Certificate Communication",
        "answer": "Thanks for reaching out to us to be a sponsor. Attached, you will find the 50% Off Certificates, as well as the Arken Optics and Outlier logos to use in your advertisements. You may print up to (4) Arken certificates ($2200 value), as well as (2) Outlier certificates ($500 value) for the date shown. Please send us any pictures or video links if you can. Thank you again for contacting us, and have a great event! Best of luck!!"
      },
      "order-certificate-info-request-2": {
        "label": "Order/Certificate info request",
        "answer": "Thank you for choosing our Match Certificate! We will need the following information to process your order. Name: Address: City: State: Zip code: Phone number: Email address: Optic choice: MIL or MOA: Ring or mount height: Throw lever: Bubble level: Flip-Its: Hat: Shirt size: Thank you again for choosing Arken Optics!!"
      }
    }
  },
  "payment": {
    "label": "payment",
    "subcategories": {
      "pending": {
        "label": "Pending",
        "answer": "Your order was accepted, but something triggered our system to check the infomation used on the order, versus the information on the card that was used. There will be a check of information, and it should process. If not, you will receive a call to confirm something about the information used. Sorry for the inconvenience. Thank you for your business and support!"
      },
      "time-of": {
        "label": "Time of",
        "answer": "The payment will be charged at the time of your order. Thanks for the inquiry!"
      }
    }
  },
  "please-change-my-order": {
    "label": "please-change-my-order",
    "subcategories": {
      "not-in-process": {
        "label": "not in process",
        "answer": "Your order has been updated per the information you have provided to us. Thank you for your business!"
      }
    }
  },
  "rebate-code": {
    "label": "rebate-code",
    "subcategories": {
      "site-doesn-t-work": {
        "label": "Site doesn't work",
        "answer": "We are currently working on the data link that will allow you to input the rebate codes to process your suppressor request. Thank you for your business and patience!"
      },
      "orders-over-500": {
        "label": "Orders over $500",
        "answer": "Your order qualified you for our suppressor rebate. You will receive an email shortly, with the rebate information, and instructions on how to proceed. Thank you for your business and support!"
      }
    }
  },
  "return-policy-change-in-process": {
    "label": "return-policy-change-in-process",
    "subcategories": {
      "1": {
        "label": "#1",
        "answer": "Your order has made it to the manufacturing process. Therefore, we will charge $35 for the change to occur. as the material and time has already been dedicated to the shipment of the order. Please advise."
      }
    }
  },
  "rma": {
    "label": "rma",
    "subcategories": {
      "shipment-received": {
        "label": "Shipment received",
        "answer": "Do not refund any orders until the product has been returned, and is in our possession."
      }
    }
  },
  "special-requests-1": {
    "label": "special-requests-1",
    "subcategories": {
      "offs": {
        "label": "Offs)",
        "answer": "At this time, we can not take on any special requests. We can only produce items that are found on our website, due to tooling and programming. We are working to increase the available items. Sorry for the inconvenience. Please check back often. Thanks!"
      }
    }
  },
  "suppressor": {
    "label": "suppressor",
    "subcategories": {
      "rebate-emails-need-to-be-sent": {
        "label": "Rebate emails need to be sent",
        "answer": "I have posted your order number with the individual who is assigning rebate numbers. You should be getting an email with the rebate information soon. Thank you for your business and support!"
      },
      "rebate-process": {
        "label": "Rebate process",
        "answer": "You will need to find the \"R\" number on your barrel. It will begin with RB-####. You will need to enter the information exactly as it shows on the barrel, into the system on the backdraftsuppressors.com website. Let us know if need any further assistance. Thank you for your business and support!"
      }
    }
  },
  "mc": {
    "label": "mc",
    "subcategories": {
      "bnut-tr": {
        "label": "BNUT-TR",
        "answer": "Barrel Nut: Tikka/Ruger"
      },
      "scr-rs": {
        "label": "SCR-RS",
        "answer": "Screw: Rail Side 30in/lbs"
      },
      "scr-rb": {
        "label": "SCR-RB",
        "answer": "Screw: Rail Bottom 30in/lbs"
      },
      "scr-far7": {
        "label": "SCR-FAR7",
        "answer": "Screw: Front Action Rem700"
      },
      "scr-famp": {
        "label": "SCR-FAMP",
        "answer": "Screw: Front Action MosPat"
      },
      "scr-fah15": {
        "label": "SCR-FAH15",
        "answer": "Screw: Front Action Howa 1500"
      },
      "scr-far783": {
        "label": "SCR-FAR783",
        "answer": "Screw: Front Action Rem783"
      },
      "scr-fara": {
        "label": "SCR-FARA",
        "answer": "Screw: Front Action Rug Amer"
      },
      "scr-fasav": {
        "label": "SCR-FASAV",
        "answer": "Screw: Front Action Sav"
      },
      "scr-fat3": {
        "label": "SCR-FAT3",
        "answer": "Screw: Front Action Tikka T3"
      },
      "scr-rr": {
        "label": "SCR-RR",
        "answer": "Screw: Rear Action 1/4-28x2\""
      },
      "scr-g": {
        "label": "SCR-G",
        "answer": "Screw: Grip 1/4-28 Allen 20in/lbs"
      },
      "scr-set": {
        "label": "SCR-SET",
        "answer": "Screw: Set 1/8\" Allen 10in/lbs"
      },
      "washer": {
        "label": "WASHER",
        "answer": "Washer: Bolt Grip Spacer"
      },
      "mrs": {
        "label": "MRS",
        "answer": "Spring: Mag Rls"
      },
      "mrp": {
        "label": "MRP",
        "answer": "Pin: Mag Rls"
      }
    }
  },
  "o": {
    "label": "o",
    "subcategories": {
      "magrls-1": {
        "label": "MAGRLS-1",
        "answer": "Release: Magazine"
      },
      "rz-mb5-8ts": {
        "label": "RZ-MB5/8TS",
        "answer": "Muzzle brake timing screw"
      }
    }
  },
  "rewards": {
    "label": "rewards",
    "subcategories": {
      "how-to": {
        "label": "How to",
        "answer": "After you sign in, go to the blue colored wallet at the bottom of the page. That is where you select how many rewards points you wish to use. You will then receive the code for the amount of points you have, to cash in towards your order. It will send you an email thanking you for redeeming your points. You may not use your rewards towards taxes or shipping, and can't use them in conjunction with any other discounts. Thanks!"
      },
      "sign-up": {
        "label": "Sign up",
        "answer": "Simply go to our website and open the main page. Look for the \"REWARDS\" tab on the right side. Click on it and fill out the form. Important note: All orders and communication to and from Arken should always use the same email address to insure proper credit. Thank you for your business and support."
      }
    }
  },
  "battery": {
    "label": "battery",
    "subcategories": {
      "cr2032-no-longer-included": {
        "label": "CR2032 No longer included",
        "answer": "As of May 15th, 2024, the CR2032 batteries are no longer included with our scopes. Please refer to the specification section of each scope on our website. We apologize for the change. Thank you for your business and support."
      }
    }
  },
  "dealer-order-questions": {
    "label": "dealer-order-questions",
    "subcategories": {
      "send-to-jacob": {
        "label": "send to Jacob",
        "answer": "Please reach out to Jacob at the following link: dealers@arkenopticsusa.com"
      }
    }
  },
  "discontinued": {
    "label": "discontinued",
    "subcategories": {
      "cpack": {
        "label": "CPACK",
        "answer": "The combo pack has been replaced with the discount from the website, on each and every item. You can pick and choose what you want, and nothing you don't. Any items, in any quantity, for the same great savings! Thanks!"
      }
    }
  },
  "email": {
    "label": "email",
    "subcategories": {
      "use-request": {
        "label": "use request",
        "answer": "When contacting us, please always use the same email you used when placing your order, and NEVER use notifications@ecwid.com That is a generic email address that we cannot respond to."
      }
    }
  },
  "invoice": {
    "label": "invoice",
    "subcategories": {
      "upgrade": {
        "label": "Upgrade",
        "answer": "Thank you for your order. Be on the lookout for the invoice. Once it is paid, we will finish processing your order. Thanks!"
      }
    }
  },
  "message": {
    "label": "message",
    "subcategories": {
      "swap": {
        "label": "SWAP",
        "answer": "We received your return and have created the swap order and sent the invoice for the S&H. Thank you!"
      }
    }
  },
  "paypal": {
    "label": "paypal",
    "subcategories": {
      "no-longer-allowed": {
        "label": "No longer allowed",
        "answer": "We are no longer associated with PayPal due to their stance on the 2nd Amendment, and the mishandling of our payments. We do take all major credit and debit cards. Thanks for your business!"
      }
    }
  },
  "products": {
    "label": "products",
    "subcategories": {
      "where-made": {
        "label": "Where made",
        "answer": "All of our products and manufactured in our facility in China, with the exception of the Japanese ED glass found in our EP scope line and SH4J. Thanks!"
      }
    }
  },
  "scope": {
    "label": "scope",
    "subcategories": {
      "included-items": {
        "label": "Included items",
        "answer": "All of our scopes come with a sunshade, bikini style cover, lens cloth, manual, and the allen wrench for the turrets. Thank you for your interest in Arken Optics USA!!"
      },
      "ring-marks-on-tube": {
        "label": "Ring marks on tube",
        "answer": "Part of our process for QA is to put them in rings and check tracking on a device called a collimator. They only tighten the rings tight enough to prevent the scope from moving during the process. There is the possibility that they might have torqued the rings close to our specs. We would never send out a used scope to our customers. Thank you for your support and business."
      },
      "setting-factory-center": {
        "label": "Setting factory center",
        "answer": "Turn the turret out until you see the largest indicator line with the \"0\" designation. This is the mechanical center for the turret and scope mechanicals, either for elevation or windage. At this point, after setting both elevation and windage, you can then proceed to establish the rifle's zero. Thanks for your business!"
      },
      "sliding": {
        "label": "Sliding",
        "answer": "You can apply batters rosin to the bearing surfaces, or a thin piece of double stick tape to help. Torque the caps to 18 in/lbs. You will need to verify that the torque on the caps is equal on both sides, to evenly distribute the pressure across all of the screws. This will all help to ensure that the scope doesn't move from recoil. Let us know if you run into any further issues. Thanks!"
      },
      "turret-travel-issues": {
        "label": "Turret travel issues",
        "answer": "You will need to make sure that you back out the ZeroStop lock and set screws, and then lock the set screw back down with the brass screw. You should have access to all of the internal travel of the scope, as long as your windage turret is set to optical center. Optical center will be at the long line marked with the 0 indicator. Check your travel, and let us know if you still have any issues. Thanks!"
      }
    }
  },
  "warranty": {
    "label": "warranty",
    "subcategories": {
      "lifetime": {
        "label": "Lifetime",
        "answer": "This is our promise to all shooters. If your Arken Optics product doesn't perform, we will replace or repair it immediately, for free, no questions asked. No warranty card to fill out, no receipt needed to hang on to, and it is fully transferable. We do this because we believe in superior quality and craftsmanship, and we're confident your Arken products won't let you down."
      }
    }
  },
  "orders": {
    "label": "orders",
    "subcategories": {
      "accessories": {
        "label": "Accessories",
        "answer": "SKU's below"
      },
      "bikini-covers": {
        "label": "BIKINI COVERS",
        "answer": "BIKINI BIKINI 28, 44, 50, 56"
      },
      "turret-orders": {
        "label": "TURRET ORDERS",
        "answer": "EP5-TE or EP5-TW"
      },
      "epl4-windage-cap": {
        "label": "EPL4 Windage cap",
        "answer": "EPL4-WC"
      },
      "ep8-elevation-and-windage-caps": {
        "label": "EP8 Elevation and Windage caps",
        "answer": "EP8 E/W CAPS"
      },
      "lh4-elevation-and-windage-caps": {
        "label": "LH4 Elevation and Windage caps",
        "answer": "LH4-TC"
      },
      "flip-its": {
        "label": "FLIP ITS",
        "answer": "Object Ocular"
      },
      "xs": {
        "label": "XS",
        "answer": "XS (TS-STA-XS)"
      },
      "s": {
        "label": "S",
        "answer": "S (TS-TSA-S)"
      },
      "m": {
        "label": "M",
        "answer": "M (TS-STA-M)"
      },
      "l": {
        "label": "L",
        "answer": "L (TS-STA-L)"
      },
      "xl": {
        "label": "XL",
        "answer": "XL (TS-STA-XL)"
      },
      "xxl": {
        "label": "XXL",
        "answer": "XXL (TS-STA-XXL)"
      },
      "xxxl": {
        "label": "XXXL",
        "answer": "XXXL (TS-STA-XXXL)"
      },
      "30mm": {
        "label": "30MM",
        "answer": "30mm - 0.97 Low (AHSR-30Low)"
      },
      "ti-30mm": {
        "label": "Ti 30MM",
        "answer": "30mm - 0.97 Low (HRT-30097)"
      },
      "34mm": {
        "label": "34MM",
        "answer": "34mm - 0.92 Low (AHSR-34Low)"
      },
      "ti-34mm": {
        "label": "Ti 34MM",
        "answer": "34mm - 0.92 Low (HRT-34092)"
      },
      "optic": {
        "label": "OPTIC",
        "answer": "STATUS"
      }
    }
  },
  "lh4": {
    "label": "lh4",
    "subcategories": {
      "44ss-50ss-sh4j-ss-ep5g2-ss": {
        "label": "44SS 50SS, SH4J-SS, EP5G2-SS",
        "answer": "LH4/SH4J/EP5G2 - Sunshade - 44mm/50mm/56mm - Free and $15 shipping."
      }
    }
  },
  "scope-screw-pack": {
    "label": "scope-screw-pack",
    "subcategories": {
      "g2": {
        "label": "G2",
        "answer": "SSPG2"
      }
    }
  },
  "tl-post": {
    "label": "tl-post",
    "subcategories": {
      "ep8-lh6": {
        "label": "EP8 / LH6",
        "answer": "EP8-TL M5*0.5"
      }
    }
  },
  "ep5g2": {
    "label": "ep5g2",
    "subcategories": {
      "te-or-ep5g2-tw": {
        "label": "TE or EP5G2-TW",
        "answer": "Elevation or Windage - $10 plus tax and $15 shipping. (Individuals - NOT sets)"
      }
    }
  },
  "epl4": {
    "label": "epl4",
    "subcategories": {
      "te-or-epl4-tw": {
        "label": "TE or EPL4-TW",
        "answer": "Elevation or Windage - $10 plus tax and $15 shipping. (Individuals - NOT sets)"
      }
    }
  },
  "sh4g2": {
    "label": "sh4g2",
    "subcategories": {
      "te-or-sh4g2-tw": {
        "label": "TE or SH4G2-TW",
        "answer": "Elevation or Windage - $10 plus tax and $15 shipping. (Individuals - NOT sets)"
      },
      "50mm": {
        "label": "50MM",
        "answer": "FL5559-3742"
      }
    }
  },
  "ep8": {
    "label": "ep8",
    "subcategories": {
      "te-or-ep8-tw-turret-ep8-elev-or-wind-moa": {
        "label": "TE or EP8-TW Turret: EP8 Elev or Wind MOA",
        "answer": "Elevation or Windage - $10 plus tax and $15 shipping. (Individuals - NOT sets)"
      },
      "lh6": {
        "label": "LH6",
        "answer": "FL3035-4449"
      }
    }
  },
  "epl4-lh4": {
    "label": "epl4-lh4",
    "subcategories": {
      "416-x-44mm": {
        "label": "416 X 44MM",
        "answer": "FL4654-3742"
      }
    }
  },
  "sh4j-epl4-lh4": {
    "label": "sh4j-epl4-lh4",
    "subcategories": {
      "624-x-50mm": {
        "label": "624 x 50MM",
        "answer": "FL5559-4449"
      }
    }
  },
  "ep5-g2": {
    "label": "ep5-g2",
    "subcategories": {
      "56mm": {
        "label": "56MM",
        "answer": "FL6065-3742"
      }
    }
  },
  "lh4-4": {
    "label": "lh4-4",
    "subcategories": {
      "16-mil-vhr": {
        "label": "16 MIL VHR",
        "answer": "DISCONTINUED - Replaced by VPR"
      },
      "16-moa-vhr": {
        "label": "16 MOA VHR",
        "answer": "DISCONTINUED - Replaced by VPR"
      }
    }
  },
  "lh4-6": {
    "label": "lh4-6",
    "subcategories": {
      "24-mil-vhr": {
        "label": "24 MIL VHR",
        "answer": "PHASE OUT"
      },
      "24-moa-vhr": {
        "label": "24 MOA VHR",
        "answer": "PHASE OUT"
      },
      "24-mil-vpr": {
        "label": "24 MIL VPR",
        "answer": "PHASE OUT"
      },
      "24-moa-vpr": {
        "label": "24 MOA VPR",
        "answer": "PHASE OUT"
      }
    }
  },
  "screw": {
    "label": "screw",
    "subcategories": {
      "throw-lever": {
        "label": "Throw lever",
        "answer": "SCREW TL34"
      },
      "turret-set-ep5g2-7-35": {
        "label": "TURRET SET - EP5G2 7-35",
        "answer": "NO INFO AT THIS TIME"
      },
      "turret-set-stainless": {
        "label": "TURRET SET (Stainless)",
        "answer": "The X3 turret cap screws are M4*12 - All use a size 2mm allen wrench."
      },
      "wind-elev-turret": {
        "label": "WIND/ELEV TURRET",
        "answer": "M4*12"
      }
    }
  },
  "weight": {
    "label": "weight",
    "subcategories": {
      "epl4": {
        "label": "EPL4",
        "answer": "416 - 23.9oz, 624 - 24.8oz"
      },
      "lh4": {
        "label": "LH4",
        "answer": "416 - 24.6oz, 624 - 25.7"
      }
    }
  },
  "custom-turrets": {
    "label": "custom-turrets",
    "subcategories": {
      "kenton-industries": {
        "label": "Kenton Industries",
        "answer": "We recommend Kenton Industries to assist you with custom turrets. Please visit their website at www.kentonindustries.com"
      }
    }
  },
  "focus-issues": {
    "label": "focus-issues",
    "subcategories": {
      "sh4-epl4-ep5-sh4j-lh4": {
        "label": "SH4, EPL4, EP5, SH4J, LH4",
        "answer": "Your optic should be very clear. Make sure you have set the diopter to your eye first. You can do this by focusing the scope on max power and the parallax at infinity. Start with the diopter turned all the way in, and then backing it out a little at a time. Look through the scope to see if the reticle is instantly clear. If not, make a slight adjustment, and check the clarity again. Don't look through the scope for very long, as your eyes will make the adjustments for you. Once the reticle is crystal clear instantly, then you should be good to go, and can set the parallax for focus at distance. Let me know if you need further assistance. Thank you for your support and business."
      }
    }
  },
  "glass": {
    "label": "glass",
    "subcategories": {
      "sh4-and-lh4": {
        "label": "SH4 and LH4",
        "answer": "The SH4 and LH4 has the Chinese HD glass. The EPL4 has the Japanese ED glass. Thank you for your interest!"
      }
    }
  },
  "pictures": {
    "label": "pictures",
    "subcategories": {
      "ask-for-them-to-cover-tech-issues": {
        "label": "Ask for them to cover tech issues",
        "answer": "To assist us in helping you with the issues, please provide us a few pictures of your rifle setup and of the scope and turrets. Thank you!"
      }
    }
  },
  "reticle": {
    "label": "reticle",
    "subcategories": {
      "bullet-drop-calculations-klbox": {
        "label": "Bullet Drop Calculations - KLBox",
        "answer": "There are examples of drop charts for both the 5.56 and the 7.62, within the manual both the hardback version (comes w/scope) and the online manual (show more under product details). They explain the numbers and how to adjust for your gun if they are different. As long as you have the ability to get an accurate muzzle velocity to input your numbers into a ballistic calculator, you can figure out if you will need to dial up/down based of your numbers compared to original design intent. Thank you for your support and business."
      }
    }
  },
  "ring-height": {
    "label": "ring-height",
    "subcategories": {
      "what-to-get": {
        "label": "What to get",
        "answer": "Ring height is a very personal choice. Please the following link for details. Thanks! https://www.arkenforum.com/forum/common-questions/which-ring-height-should-i-get"
      }
    }
  },
  "screws": {
    "label": "screws",
    "subcategories": {
      "stripped-in-turret-not": {
        "label": "Stripped in turret (NOT)",
        "answer": "Most likely the grub screw isn't stripped, as it is hardened stainless. Please try using a hardened allen wrench, or a #8 or #9 Torx bit, as it is a much better fit and will most likely take care of the issue. Thanks!"
      }
    }
  },
  "stadia": {
    "label": "stadia",
    "subcategories": {
      "values-for-mil-and-moa": {
        "label": "Values for MIL and MOA",
        "answer": "The hash marks are either in MIL or MOA. To use these for rangefinding, you will need to follow these formulas. MIL is Size of Target (inches) x 27.78 / Measured MIL = Yards. MOA is Size of Target (inches) x 95.5 / Measured MOA = Yards. All of our reticles are based on either true MIL or true MOA."
      }
    }
  },
  "zero": {
    "label": "zero",
    "subcategories": {
      "0-mark-correction": {
        "label": "0- mark correction",
        "answer": "It is possible, that your stop plate has moved. You will need to remove the turret, and slightly loosen the (3) 0.9mm screws around the perimeter of the plate. Turn the plate till the stop bar is pointed down in the 6:00 o'clock position. Use the turret with the ZeroStop set screw screwed in far enough that the post is protruding out. This will basically be your tool to set the stop plate in the correct position. Turn the turret so the -0- lines up exactly with the line on the body of the scope. Remove the turret and tighten the (4) 0.9mm screws to secure the stop plate. Replace the turret and re-zero the rifle. Set the ZeroStop feature of the scope, and you are good to go. https://www.dropbox.com/s/5wszqv3uohbh8la/ZeroStopPlate.mov?dl=0"
      }
    }
  }
};

  const SETTINGS = {
    buttonText: "Help / FAQs",
    titleText: "Support Center"
  };

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach((c) => node.appendChild(c));
    return node;
  }
  function textNode(s) { return document.createTextNode(s); }

  function buildUI() {
    if (document.getElementById("outlier-faq-button")) return;

    const button = el("button", { id: "outlier-faq-button", type: "button" }, [
      textNode(SETTINGS.buttonText)
    ]);

    const modal = el("div", { id: "outlier-faq-modal", class: "outlier-faq--hidden" });
    const overlay = el("div", { class: "outlier-faq__overlay" });
    const windowEl = el("div", { class: "outlier-faq__window", role: "dialog", "aria-modal": "true" });

    const header = el("div", { class: "outlier-faq__header" }, [
      el("div", { class: "outlier-faq__title" }, [textNode(SETTINGS.titleText)]),
      el("button", { id: "outlier-faq-close", type: "button", class: "outlier-faq__close", "aria-label": "Close" }, [
        textNode("✕")
      ])
    ]);

    const body = el("div", { class: "outlier-faq__body" });
    const navRow = el("div", { class: "outlier-faq__nav" });
    const backBtn = el("button", { id: "outlier-faq-back", type: "button", class: "outlier-faq__back outlier-faq--hidden" }, [
      textNode("← Back")
    ]);
    const crumb = el("div", { id: "outlier-faq-crumb", class: "outlier-faq__crumb" }, [
      textNode("Select a topic")
    ]);
    navRow.appendChild(backBtn);
    navRow.appendChild(crumb);

    const content = el("div", { id: "outlier-faq-content", class: "outlier-faq__content" });
    body.appendChild(navRow);
    body.appendChild(content);

    windowEl.appendChild(header);
    windowEl.appendChild(body);

    modal.appendChild(overlay);
    modal.appendChild(windowEl);

    document.body.appendChild(button);
    document.body.appendChild(modal);

    const state = { step: "issues", issueKey: null, subKey: null };

    function setCrumb() {
      const crumbEl = document.getElementById("outlier-faq-crumb");
      if (!crumbEl) return;

      if (state.step === "issues") crumbEl.textContent = "Select a topic";
      else if (state.step === "subs") crumbEl.textContent = FAQ_DATA[state.issueKey]?.label || "Topic";
      else {
        const issue = FAQ_DATA[state.issueKey];
        const sub = issue?.subcategories?.[state.subKey];
        crumbEl.textContent = issue && sub ? `${issue.label} → ${sub.label}` : "Answer";
      }
    }

    function setBackVisible() {
      const back = document.getElementById("outlier-faq-back");
      if (!back) return;
      if (state.step === "issues") back.classList.add("outlier-faq--hidden");
      else back.classList.remove("outlier-faq--hidden");
    }

    function renderIssues() {
      const root = document.getElementById("outlier-faq-content");
      root.innerHTML = "";

      const list = el("div", { class: "outlier-faq__list" });

      Object.keys(FAQ_DATA).forEach((issueKey) => {
        const issue = FAQ_DATA[issueKey];
        const item = el("button", { type: "button", class: "outlier-faq__item" }, [
          el("div", { class: "outlier-faq__item-title" }, [textNode(issue.label)]),
          el("div", { class: "outlier-faq__item-meta" }, [
            textNode(`${Object.keys(issue.subcategories || {}).length} topics`)
          ])
        ]);

        item.addEventListener("click", function () {
          state.step = "subs";
          state.issueKey = issueKey;
          state.subKey = null;
          render();
        });

        list.appendChild(item);
      });

      root.appendChild(list);
    }

    function renderSubs() {
      const root = document.getElementById("outlier-faq-content");
      root.innerHTML = "";

      const issue = FAQ_DATA[state.issueKey];
      if (!issue) {
        state.step = "issues";
        return render();
      }

      const list = el("div", { class: "outlier-faq__list" });

      Object.keys(issue.subcategories || {}).forEach((subKey) => {
        const sub = issue.subcategories[subKey];
        const item = el("button", { type: "button", class: "outlier-faq__item" }, [
          el("div", { class: "outlier-faq__item-title" }, [textNode(sub.label)]),
          el("div", { class: "outlier-faq__item-meta" }, [textNode("View answer")])
        ]);

        item.addEventListener("click", function () {
          state.step = "answer";
          state.subKey = subKey;
          render();
        });

        list.appendChild(item);
      });

      root.appendChild(list);
    }

    function renderAnswer() {
      const root = document.getElementById("outlier-faq-content");
      root.innerHTML = "";

      const issue = FAQ_DATA[state.issueKey];
      const sub = issue?.subcategories?.[state.subKey];
      if (!issue || !sub) {
        state.step = "subs";
        return render();
      }

      const card = el("div", { class: "outlier-faq__answer" }, [
        el("div", { class: "outlier-faq__answer-title" }, [textNode(sub.label)]),
        el("div", { class: "outlier-faq__answer-text" }, [textNode(sub.answer || "")]),
        el("div", { class: "outlier-faq__answer-footer" }, [
          el("button", { type: "button", class: "outlier-faq__secondary", id: "outlier-faq-contact" }, [
            textNode("Still need help? Contact support")
          ])
        ])
      ]);

      root.appendChild(card);

      const contactBtn = document.getElementById("outlier-faq-contact");
      if (contactBtn) {
        contactBtn.addEventListener("click", function () {
          openContactPopup();
        });
      }
    }


function openContactPopup() {
  // Create once
  const existing = document.getElementById("outlier-faq-contact-modal");
  if (!existing) {
    const overlay = el("div", { class: "outlier-faq__contact-overlay outlier-faq--hidden", id: "outlier-faq-contact-overlay" });
    const win = el("div", { class: "outlier-faq__contact-window outlier-faq--hidden", id: "outlier-faq-contact-modal" }, [
      el("div", { class: "outlier-faq__contact-title" }, [textNode("Contact Support")]),
      el("div", { class: "outlier-faq__contact-text" }, [
        textNode("Email "),
        el("span", { class: "outlier-faq__contact-email" }, [textNode("support@getoutlier.com")])
      ]),
      el("div", { class: "outlier-faq__contact-actions" }, [
        el("button", { type: "button", class: "outlier-faq__contact-btn", id: "outlier-faq-copy-email" }, [textNode("Copy email")]),
        el("button", { type: "button", class: "outlier-faq__contact-btn outlier-faq__contact-btn--ghost", id: "outlier-faq-close-contact" }, [textNode("Close")])
      ])
    ]);

    document.body.appendChild(overlay);
    document.body.appendChild(win);

    function close() {
      overlay.classList.add("outlier-faq--hidden");
      win.classList.add("outlier-faq--hidden");
    }

    overlay.addEventListener("click", close);
    win.querySelector("#outlier-faq-close-contact").addEventListener("click", close);
    win.querySelector("#outlier-faq-copy-email").addEventListener("click", async function () {
      const email = "support@getoutlier.com";
      try {
        await navigator.clipboard.writeText(email);
        const btn = win.querySelector("#outlier-faq-copy-email");
        const prev = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(() => (btn.textContent = prev), 1200);
      } catch (e) {
        alert(email);
      }
    });
  }

  const overlay = document.getElementById("outlier-faq-contact-overlay");
  const win = document.getElementById("outlier-faq-contact-modal");
  overlay.classList.remove("outlier-faq--hidden");
  win.classList.remove("outlier-faq--hidden");
}
    function render() {
      setBackVisible();
      setCrumb();
      if (state.step === "issues") renderIssues();
      else if (state.step === "subs") renderSubs();
      else renderAnswer();
    }

    function openModal() {
      modal.classList.remove("outlier-faq--hidden");
      state.step = "issues";
      state.issueKey = null;
      state.subKey = null;
      render();
    }

    function closeModal() {
      modal.classList.add("outlier-faq--hidden");
    }

    button.addEventListener("click", openModal);
    overlay.addEventListener("click", closeModal);
    document.getElementById("outlier-faq-close").addEventListener("click", closeModal);

    backBtn.addEventListener("click", function () {
      if (state.step === "answer") state.step = "subs";
      else if (state.step === "subs") state.step = "issues";
      render();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("outlier-faq--hidden")) {
        closeModal();
      }
    });

    render();
  }

  function ready(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") setTimeout(fn, 0);
    else document.addEventListener("DOMContentLoaded", fn);
  }
  ready(buildUI);
})();