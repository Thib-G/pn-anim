/* eslint-disable */
export default function (vardb) {
  const designations = [
    {
      "id": 106,
      "mesure": "I LR1(X'-Y')",
      "Fonction": "Mesure Courant feux rouge 1, poteaux feux X' et Y'",
      "Type d'info": "Analogique",
      "vardb": "i_lr1_xy_b",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 108,
      "mesure": "I LR1(W'-Z')",
      "Fonction": "Mesure Courant feux rouge 1, poteaux feux W' et Z'",
      "Type d'info": "Analogique",
      "vardb": "i_lr1_wz_b",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 109,
      "mesure": "I LR2(W'-Z')",
      "Fonction": "Mesure Courant feux rouge 2",
      "Type d'info": "Analogique",
      "vardb": "i_lr2_wz_b",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 129,
      "mesure": "KMS(Z)",
      "Fonction": "Contrôle Micro Switch Z",
      "Type d'info": "Digital",
      "vardb": "kms_z",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 1,
      "mesure": "DCL",
      "Fonction": "Dédoublement relais CLignotant feux",
      "Type d'info": "Digital",
      "vardb": "dcl",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 2,
      "mesure": "A",
      "Fonction": "Relais Alarme",
      "Type d'info": "Digital",
      "vardb": "a",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 3,
      "mesure": "CB(X-Y)",
      "Fonction": "Relais Commande Barrière X-Y",
      "Type d'info": "Digital",
      "vardb": "cb_xy",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 5,
      "mesure": "CB(W-Z)",
      "Fonction": "Relais Commande Barrière W-Z",
      "Type d'info": "Digital",
      "vardb": "cb_wz",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 82,
      "mesure": "1NHS",
      "Fonction": "Mise Hors service du PN du local gardiennage",
      "Type d'info": "Digital",
      "vardb": "un_nhs",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 86,
      "mesure": "2FX",
      "Fonction": "PLP commande fermeture 2",
      "Type d'info": "Digital",
      "vardb": "deux_fx",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 35,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "nu",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 20,
      "mesure": "KLR1(X'-Y')",
      "Fonction": "Contrôle relais feux rouges 1, poteaux feux X' et Y'",
      "Type d'info": "Digital",
      "vardb": "klr1_xy_b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 21,
      "mesure": "KLR2(X'-Y')",
      "Fonction": "Contrôle relais feux rouges 2, poteaux feux X' et Y'",
      "Type d'info": "Digital",
      "vardb": "klr2_xy_b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 22,
      "mesure": "KLR1(W'-Z')",
      "Fonction": "Contrôle relais feux rouges 1, poteaux feux W' et Z'",
      "Type d'info": "Digital",
      "vardb": "klr1_wz_b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 15,
      "mesure": "KFB(Z)",
      "Fonction": "Contrôle relais commande Fermeture Barrière",
      "Type d'info": "Digital",
      "vardb": "kfb_z",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 6,
      "mesure": "CFX",
      "Fonction": "Commande de fermeture passage à niveau",
      "Type d'info": "Digital",
      "vardb": "cfx",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 7,
      "mesure": "KAV",
      "Fonction": "Contrôle Alimentation",
      "Type d'info": "Digital",
      "vardb": "kav",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 8,
      "mesure": "KOB(X)",
      "Fonction": "Contrôle relais commande Ouverture Barrière X",
      "Type d'info": "Digital",
      "vardb": "kob_x",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 9,
      "mesure": "KOB(Y)",
      "Fonction": "Contrôle relais commande Ouverture Barrière Y",
      "Type d'info": "Digital",
      "vardb": "kob_y",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 10,
      "mesure": "KOB(W)",
      "Fonction": "Contrôle relais commande Ouverture Barrière W",
      "Type d'info": "Digital",
      "vardb": "kob_w",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 11,
      "mesure": "KOB(Z)",
      "Fonction": "Contrôle relais commande Ouverture Barrière Z",
      "Type d'info": "Digital",
      "vardb": "kob_z",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 12,
      "mesure": "KFB(X)",
      "Fonction": "Contrôle relais commande Fermeture Barrière X",
      "Type d'info": "Digital",
      "vardb": "kfb_x",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 13,
      "mesure": "KFB(Y)",
      "Fonction": "Contrôle relais commande Fermeture Barrière Y",
      "Type d'info": "Digital",
      "vardb": "kfb_y",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 14,
      "mesure": "KFB(W)",
      "Fonction": "Contrôle relais commande Fermeture Barrière W",
      "Type d'info": "Digital",
      "vardb": "kfb_w",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 16,
      "mesure": "KLR1(X-Y)",
      "Fonction": "Contrôle relais feux rouges 1, poteaux feux X et Y",
      "Type d'info": "Digital",
      "vardb": "klr1_xy",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 17,
      "mesure": "KLR2(X-Y)",
      "Fonction": "Contrôle relais feux rouges 2, poteaux feux X et Y",
      "Type d'info": "Digital",
      "vardb": "klr2_xy",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 18,
      "mesure": "KLR1(W-Z)",
      "Fonction": "Contrôle relais feux rouges 1, poteaux feux W et Z",
      "Type d'info": "Digital",
      "vardb": "klr1_wz",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 19,
      "mesure": "KLR2(W-Z)",
      "Fonction": "Contrôle relais feux rouges 2, poteaux feux W et Z",
      "Type d'info": "Digital",
      "vardb": "klr2_wz",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 24,
      "mesure": "KLP",
      "Fonction": "Contrôle relais commande Feux blanc",
      "Type d'info": "Digital",
      "vardb": "klp",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 110,
      "mesure": "I LP",
      "Fonction": "Mesure Courant feux blanc",
      "Type d'info": "Analogique",
      "vardb": "i_lp",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "ac"
    },
    {
      "id": 120,
      "mesure": "I RG",
      "Fonction": "Mesure Courant Chargeur batterie",
      "Type d'info": "Analogique",
      "vardb": "i_rg",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 121,
      "mesure": "I AV",
      "Fonction": "Mesure Courant Alim. 24Vdc",
      "Type d'info": "Analogique",
      "vardb": "i_av",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 30,
      "mesure": "T32",
      "Fonction": "Relais tempo",
      "Type d'info": "Digital",
      "vardb": "t32",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 31,
      "mesure": "T600",
      "Fonction": "Relais tempo",
      "Type d'info": "Digital",
      "vardb": "t600",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 32,
      "mesure": "DA",
      "Fonction": "Dédoublement relais alarme",
      "Type d'info": "Digital",
      "vardb": "da",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 33,
      "mesure": "KFX",
      "Fonction": "Contrôle relais",
      "Type d'info": "Digital",
      "vardb": "kfx",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 34,
      "mesure": "RHS",
      "Fonction": "Enregistrement mode hors-service",
      "Type d'info": "Digital",
      "vardb": "rhs",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 36,
      "mesure": "RA",
      "Fonction": "Relais grande alarme",
      "Type d'info": "Digital",
      "vardb": "rga",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 37,
      "mesure": "Ra",
      "Fonction": "Relais petite alarme",
      "Type d'info": "Digital",
      "vardb": "rpa",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 38,
      "mesure": "DRA",
      "Fonction": "Dédoublement relais grande alarme",
      "Type d'info": "Digital",
      "vardb": "drga",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 102,
      "mesure": "I LR1(X-Y)",
      "Fonction": "Mesure Courant feux rouge 1, poteaux feux X et Y",
      "Type d'info": "Analogique",
      "vardb": "i_lr1_xy",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 39,
      "mesure": "Dra",
      "Fonction": "Dédoublement relais petite alarme",
      "Type d'info": "Digital",
      "vardb": "drpa",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 93,
      "mesure": "CAT(...-B)",
      "Fonction": "Interface Contrôle d'essieux",
      "Type d'info": "Interface ILX(KLX) boîtier Télécom",
      "vardb": "cat_b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 91,
      "mesure": "DV of V(B2...)",
      "Fonction": "Circuit d'annonce 2 voie B",
      "Type d'info": "Digital",
      "vardb": "v_b2",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 92,
      "mesure": "CAT(...-2B)",
      "Fonction": "Interface Contrôle d'essieux",
      "Type d'info": "Digital",
      "vardb": "cat_2b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 84,
      "mesure": "CAT(...-2A)",
      "Fonction": "Interface Contrôle d'essieux",
      "Type d'info": "Digital",
      "vardb": "cat_2a",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 85,
      "mesure": "CAT(...-A)",
      "Fonction": "Interface Contrôle d'essieux",
      "Type d'info": "Digital",
      "vardb": "cat_a",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 83,
      "mesure": "DV of V(A2...)",
      "Fonction": "Circuit d'annonce 2 voie A traversée",
      "Type d'info": "Digital",
      "vardb": "v_a2",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 122,
      "mesure": "V(A1...)",
      "Fonction": "Circuit d'annonce 1 voie A voie normale",
      "Type d'info": "Digital",
      "vardb": "v_a1",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 123,
      "mesure": "V(A3...)",
      "Fonction": "Circuit d'annonce 3 voie A contrevoie",
      "Type d'info": "Digital",
      "vardb": "v_a3",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 26,
      "mesure": "Ka1",
      "Fonction": "Contrôle petite alarme 1",
      "Type d'info": "Digital",
      "vardb": "kpa1",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 27,
      "mesure": "Ka2",
      "Fonction": "Contrôle petite alarme 2",
      "Type d'info": "Digital",
      "vardb": "kpa2",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 28,
      "mesure": "KA1",
      "Fonction": "Contrôle grande alarme 1",
      "Type d'info": "Digital",
      "vardb": "kga1",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 29,
      "mesure": "KA2",
      "Fonction": "Contrôle grande alarme 2",
      "Type d'info": "Digital",
      "vardb": "kga2",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 124,
      "mesure": "V(B1...)",
      "Fonction": "Circuit d'annonce 1 voie B",
      "Type d'info": "Digital",
      "vardb": "v_b1",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 125,
      "mesure": "V(B3...)",
      "Fonction": "Circuit d'annonce 3 voie B",
      "Type d'info": "Digital",
      "vardb": "v_b3",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 78,
      "mesure": "1FX",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "un_fx",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 79,
      "mesure": "RTW(A)",
      "Fonction": "Annulation des zones d'annonce appliquée",
      "Type d'info": "Digital",
      "vardb": "rtw_a",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 80,
      "mesure": "1HS",
      "Fonction": "Mise HS des zones d'annonce: éviter fermeture PN pour chargement",
      "Type d'info": "Digital",
      "vardb": "un_hs",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 81,
      "mesure": "1DHS",
      "Fonction": "Mise HS des zones d'annonce: éviter fermeture PN pour chargement",
      "Type d'info": "Digital",
      "vardb": "un_dhs",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 23,
      "mesure": "KLR2(W'-Z')",
      "Fonction": "Contrôle relais feux rouges 2, poteaux feux W' et Z'",
      "Type d'info": "Digital",
      "vardb": "klr2_wz_b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 0,
      "mesure": "CL",
      "Fonction": "Commande lancement du cycle",
      "Type d'info": "Digital",
      "vardb": "cl",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 4,
      "mesure": "NCB(W-Z)",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "ncb_wz",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 103,
      "mesure": "I LR2(X-Y)",
      "Fonction": "Mesure Courant feux rouge 2, poteaux feux X et Y",
      "Type d'info": "Analogique",
      "vardb": "i_lr2_xy",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 104,
      "mesure": "I LR1(W-Z)",
      "Fonction": "Mesure Courant feux rouge 1, poteaux feux W et Z",
      "Type d'info": "Analogique",
      "vardb": "i_lr1_wz",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 116,
      "mesure": "I MB(X)",
      "Fonction": "Mesure Courant Moteur Barrière X",
      "Type d'info": "Analogique",
      "vardb": "i_mb_x",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc10"
    },
    {
      "id": 117,
      "mesure": "I MB(Y)",
      "Fonction": "Mesure Courant Moteur Barrière Y",
      "Type d'info": "Analogique",
      "vardb": "i_mb_y",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc10"
    },
    {
      "id": 118,
      "mesure": "I MB(W)",
      "Fonction": "Mesure Courant Moteur Barrière W",
      "Type d'info": "Analogique",
      "vardb": "i_mb_w",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc10"
    },
    {
      "id": 119,
      "mesure": "I MB(Z)",
      "Fonction": "Mesure Courant Moteur Barrière Z",
      "Type d'info": "Analogique",
      "vardb": "i_mb_z",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc10"
    },
    {
      "id": 105,
      "mesure": "I LR2(W-Z)",
      "Fonction": "Mesure Courant feux rouge 2, poteaux feux W et Z",
      "Type d'info": "Analogique",
      "vardb": "i_lr2_wz",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 111,
      "mesure": "I LP'",
      "Fonction": "Courant dans les lampes blanches quand il y a plus que 4 poteaux feux",
      "Type d'info": "Analogique",
      "vardb": "i_lp_b",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 107,
      "mesure": "I LR2(X'-Y')",
      "Fonction": "Mesure Courant feux rouge 2, poteaux feux X' et Y'",
      "Type d'info": "Analogique",
      "vardb": "i_lr2_xy_b",
      "varnat": "A",
      "platine": 1,
      "module": 2,
      "sensor": "dc"
    },
    {
      "id": 87,
      "mesure": "RTW(B)",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "rtw_b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 88,
      "mesure": "2HS",
      "Fonction": "Mise HS des zones d'annonce: éviter fermeture PN pour chargement",
      "Type d'info": "Digital",
      "vardb": "deux_hs",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 89,
      "mesure": "2DHS",
      "Fonction": "Mise HS des zones d'annonce: éviter fermeture PN pour chargement",
      "Type d'info": "Digital",
      "vardb": "deux_dhs",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 90,
      "mesure": "2NHS",
      "Fonction": "Annulation Mise HS des zones d'annonce: éviter fermeture PN pour chargement",
      "Type d'info": "Digital",
      "vardb": "deux_nhs",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 94,
      "mesure": "DKX",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "dkx",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 95,
      "mesure": "KDO",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "kdo",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 96,
      "mesure": "AX",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "ax",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 97,
      "mesure": "KX",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "kx",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 98,
      "mesure": "COX",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "cox",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 99,
      "mesure": "M",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "m",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 100,
      "mesure": "FDO",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "fdo",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 101,
      "mesure": "DHS",
      "Fonction": "",
      "Type d'info": "Digital",
      "vardb": "dhs",
      "varnat": "D",
      "platine": 1,
      "module": 2,
      "sensor": ""
    },
    {
      "id": 126,
      "mesure": "KMS(X)",
      "Fonction": "Contrôle Micro Switch X",
      "Type d'info": "Digital",
      "vardb": "kms_x",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 127,
      "mesure": "KMS(Y)",
      "Fonction": "Contrôle Micro Switch Y",
      "Type d'info": "Digital",
      "vardb": "kms_y",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 128,
      "mesure": "KMS(W)",
      "Fonction": "Contrôle Micro Switch W",
      "Type d'info": "Digital",
      "vardb": "kms_w",
      "varnat": "D",
      "platine": 1,
      "module": 1,
      "sensor": ""
    },
    {
      "id": 130,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 131,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 132,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 133,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 134,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 135,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 136,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 137,
      "mesure": "(libre)",
      "Fonction": "",
      "Type d'info": "Analogique",
      "vardb": "nu",
      "varnat": "A",
      "platine": 2,
      "module": 3,
      "sensor": ""
    },
    {
      "id": 25,
      "mesure": "KLP'",
      "Fonction": "Contrôle dans les lampes blanches quand il y a plus que 4 poteaux feux",
      "Type d'info": "Digital",
      "vardb": "klp_b",
      "varnat": "D",
      "platine": 2,
      "module": 3,
      "sensor": ""
    }
  ];
  const item = designations.find(d => d.vardb === vardb);

  if (!item || item.Fonction === '') {
    return 'inconnu';
  }
  
  return item.Fonction;
};
