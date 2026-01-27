(function () {
  const FAQ_DATA = {
  "delays": {
    "label": "Delays",
    "subcategories": {
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
    }
  },
  "shipping": {
    "label": "Shipping",
    "subcategories": {
      "outlier-usa-address": {
        "label": "Outlier USA address",
        "answer": "6217 TX-66, Greenville, TX 75402"
      },
      "lost-in-transit": {
        "label": "Lost in Transit",
        "answer": "Please make sure to reach out to our support at info@getoutlier.com so we can figure out this issue together!"
      },
      "outside-the-us": {
        "label": "Outside the US",
        "answer": "Due to ITAR and EAR regulations, we are not allowed to ship outside the US or it's territories. We may possibly open dealer relations in your region in the future. Thank you for the inquiry!"
      },
      "partial": {
        "label": "Partial",
        "answer": "Your order was split, so we could send you the items that we had in stock. The remainder of your order will be processed as soon as possible. Thank you for your business and patience!"
      },
      "my-order-shows-you-still-have-it": {
        "label": "My order shows you still have it",
        "answer": "Once the package is labeled, we put them in a cart for UPS pick up. They pick up from us daily but do not scan them. They scan them in once they reach whatever UPS facility they take them. Thank you for your business and support."
      },
      "no-shipping-notice": {
        "label": "No Shipping Notice",
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
      "missing-items-check-packing-list": {
        "label": "Missing items / Check packing list",
        "answer": "The packing slip (which looks like a return shipping label) indicates all the items that were included in that shipment. The remainder of your order (not shown in the items list) will be shipping once we have those items back in stock. Thank you for your business and patience!"
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
        "label": "Address Issues",
        "answer": "If your address has been flagged by our shipping equipment and it is not showing up on Google maps. That does not always mean it is wrong but we would appreciate it if you can check what we have and either verify it, or alert us to any changes. If it is a business, box, or suite, please let us know. If it is an apartment, we need the name of the apartments and the apartment #. Thank you in advance."
      },
    }
  },
  "payments": {
    "label": "Payments",
    "subcategories": {
      "gift-cards-prepaid-cards-split-payments": {
        "label": "Gift cards / Prepaid cards / Split payments",
        "answer": "We utilize a 3rd party payment processor. They do not accept gift cards, prepaid cards, or split payments. Sorry for the inconvenience."
      },
      "refund-return-policy": {
        "label": "Refund/Return Policy",
        "answer": "We have a 30 day window for returns/refunds. We can exchange the item under warranty for you if you wish. Thank you for your business and support."
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
      "no-discount-stacking": {
        "label": "No Discount Stacking",
        "answer": "You are allowed to use any of the discount codes or the rewards points, but no discounts can be combined. We are not allowed to stack multiple discounts on one order. Thanks!"
      },
      "how-to-apply-discount": {
        "label": "How to apply discount",
        "answer": "Add all the items into your shopping bag that you are wanting. Click on Go To Checkout. Down close to the bottom, right under the order total dollar amount, is the line that says \"Discount or Reward Code? Click HERE to redeem\". Click there, and enter the discount code, and hit apply. You should be good to go. Please keep in mind that you are not allowed to combine rewards and other discount codes together. Thanks!"
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
        "label": "Break-in process",
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
      "suppressors": {
        "label": "Suppressors",
        "answer": "Your rebate code will be lasered onto the barrel itself. Once you receive your barrel, you can then use the code on our website, backdraftsuppressors.com. Thank you for your business and patience!"
      },
      "adapter-fitment": {
        "label": "Adapter fitment",
        "answer": "All of our HUB's fit our suppressors. It is dependent on the mating part that determines the correct adapter. For standard barrels, you will need either the 1/2-28TPI, or 5/8-24TPI direct thread adapter. For the backdraft system, you will choose either the 1\"OD or 1.2\"OD adapter. 1\"OD adapter is for the AR9 and AR15's. The 1.2\"OD adapters are for the backdraft barrels and the AR10. Thanks!"
      },
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
      "ffl-sot": {
        "label": "FFL/SOT",
        "answer": "Please forward the FFL/SOT information to license@masterffl.com. They will input the information to their database. Thanks!"
      },
      "ffl-sot-not-listed": {
        "label": "FFL/SOT not listed",
        "answer": "Please double check that the filters are set correctly with your search. If they are correct, and you still can't locate the specific FFL/SOT, they will either need to send their information to licensing@masterffl.com, or you will need to choose a different FFL/SOT close to your area. Thanks!"
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
      "warranty-parts-fulfillment": {
        "label": "Warranty Parts/Fulfillment",
        "answer": "WARRANTY PARTS"
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
      "water-proofing-building-standard": {
        "label": "Water proofing building standard",
        "answer": "We utilize the IPX7 Standard for water proofing."
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
      "how-does-the-site-work-and-what-do-i-order": {
        "label": "How does the site work and what do I order?",
        "answer": "There is a process on our website (Backdraft Suppressors) that will have you fill out what SOT you would like the suppressor sent to. The $200 tax stamp will still be in effect until January 1st, 2026 to our knowledge, however, we are talking about the Government which is shut down. Right now they aren't processing any suppressor paperwork to my knowledge. So our hub mount you can get in either 5/8x24 or 1/2x28. Or you can get a direct thread in either of those thread pitches. So all in all customers will have 4 options for their mounting choice, which is an option under adapters on the website to choose. The suppressor doesn't come with the mount. If you have a back draft barrel then you would choose 1 of 2 options for the hub adaptor proprietary to work with our back draft barrels. Hope this all makes sense to you. Thank you for your support."
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
        "answer": "Our payment processor may have denied the transaction. The funds were returned immediately. Your financial institution will typically hold the funds for 3-5 business days to process back to your account. Sorry for the inconvenience."
      },
      "seal-1-clp-plus": {
        "label": "SEAL 1 CLP Plus",
        "answer": "SEAL 1 CLP Plus can be used for a variety of purposes. It dissolves carbon on contact, reducing cleaning time and making it easier to clean guns in the future. Plus it works as a lubrication for installation, and creates a barrier that protects against copper, lead, sand, dust, and dirt and rust."
      },
      "tax-on-orders": {
        "label": "Tax on orders",
        "answer": "https://www.taxjar.com/sales-tax-calculator"
      },
      "twist-rate-info": {
        "label": "Twist rate info",
        "answer": "Overstabilization is not truly an issue with modern projectiles. While some lighter projectiles may need less twist, the higher twist won't hurt anything. If you get the barrel, and you don't like the performance, you can return it within 30 days for a refund. We are currently only set up to offer the twist rates as shown on the website. Thanks for the inquiry!"
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
  "rebate-code": {
    "label": "Rebate Code",
    "subcategories": {
      "site-doesn-t-work": {
        "label": "Site doesn't work",
        "answer": "We are currently working on the data link that will allow you to input the rebate codes to process your suppressor request. Thank you for your business and patience!"
      },
      "orders-over-500": {
        "label": "Orders over $500",
        "answer": "Your order qualified you for our suppressor rebate. You will receive an email shortly, with the rebate information, and instructions on how to proceed. Thank you for your business and support!"
      },
       "rebate-process": {
        "label": "Rebate process",
        "answer": "You will need to find the \"R\" number on your barrel. It will begin with RB-####. You will need to enter the information exactly as it shows on the barrel, into the system on the backdraftsuppressors.com website. Let us know if need any further assistance. Thank you for your business and support!"
       }
    }
  },
  "paypal": {
    "label": "paypal",
    "subcategories": {
      "no-longer-allowed": {
        "label": "PayPal",
        "answer": "We are no longer associated with PayPal due to their stance on the 2nd Amendment, and the mishandling of our payments. We do take all major credit and debit cards. Thanks for your business!"
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
