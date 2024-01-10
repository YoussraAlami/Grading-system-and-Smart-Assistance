const Joi = require('joi');

module.exports = {
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const result = schema.validate({ param: req['params'][name] });
            if (result.error) {
                return res.status(400).json({ msg: 'invalide parameter was provided', error: result.error });
            } else {
                next();
            }
        }
    },

    validateBody: (schema) => {
        return async(req, res, next) => {
        
            const result = schema.validate(req.body);
            if (result.error) {
                return res.status(400).json({ msg: 'Invalide data was provided', error: result.error });
            } else {
             
                next();
            }
        }
    },

schemas: {

userSchema: Joi.object().keys({
                  
        email:Joi.string().required().email().messages({
             "string.base": `"the email of user should be a type of 'string'.`,
             "string.empty": `"the email of user  cannot be an empty field.`
         }),
         
         userName:Joi.string().messages({
           "string.base": `"the userName of user should be a type of 'string'.`,
           "string.empty": `"the userName of user  cannot be an empty field.`
       }),
         password:Joi.string().required().regex(/^[0-9a-zA-Z]{1,30}$/).min(8).max(30).messages({
             "string.base": `"the password" of user  should be a type of 'string'.`,
             "string.regex": `"the password" of user  doesn't mutch the patern.`,
             "string.empty": `"the password" of user  cannot be an empty field.`
         })
}),
//=====================================================================================================
userOptionalSchema: Joi.object().keys({
               
 email:Joi.string().email().messages({
      "string.base": `"the email of user should be a type of 'string'.`,
      "string.empty": `"the email of user  cannot be an empty field.`
  }),
  userName:Joi.string().messages({
    "string.base": `"the userName of user should be a type of 'string'.`,
    "string.empty": `"the userName of user  cannot be an empty field.`
}),

  password:Joi.string().regex(/^[0-9a-zA-Z]{1,30}$/).min(8).max(30).messages({
      "string.base": `"the password" of user  should be a type of 'string'.`,
      "string.regex": `"the password" of user  doesn't mutch the patern.`,
      "string.empty": `"the password" of user  cannot be an empty field.`
  })
}),
 //=====================================================================================================
individuSchema: Joi.object().keys({
   
        nom_individu: Joi.string().required().messages({
            "string.base": `"nom_individu" of the individu should be a type of 'string'.`,
            "string.empty": `"nom_individu" of the  individu  cannot be an empty field.`
        }),
        prenom_individu: Joi.string().required().messages({
            "string.base": `"prenom_individu" of the individu should be a type of 'string'.`,
            "string.empty": `"prenom_individu" of the  individu  cannot be an empty field.`
        }),
   
    Date_de_naissance: Joi.date().required().messages({
        "date.base": `"date de naissance"  should be a type of 'string'.`,
        "string.empty": `"date de naissance"  cannot be an empty field.`,
        "any.required": `"date de naissance"  is required.`,
    }),
    Bilans: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
    "string.base": `"the classe id" of Bilans should be a type of 'string'.`,
    "string.regex": `"the classe id" of Bilans doesn't mutch the patern.`,
    "string.empty": `"the classe id" of Bilans cannot be an empty field.`
    })),

 }),
//=====================================================================================================
individuOptionalSchema: Joi.object().keys({
   
        nom_individu: Joi.string().messages({
            "string.base": `"nom_individu" of the individu should be a type of 'string'.`,
            "string.empty": `"nom_individu" of the  individu  cannot be an empty field.`
        }),
        prenom_individu: Joi.string().messages({
            "string.base": `"prenom_individu" of the individu should be a type of 'string'.`,
            "string.empty": `"prenom_individu" of the  individu  cannot be an empty field.`
        }),
    
        Date_de_naissance: Joi.date().messages({
        "date.base": `"the date de naissance"  should be a type of 'string'.`,
        "string.empty": `"the date de naissance" cannot be an empty field.`,
        "any.required": `"the date de naissance"  is required.`,
    }),
    Bilans: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of Bilans  should be a type of 'string'.`,
        "string.regex": `"the classe id" of Bilans  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of Bilans  cannot be an empty field.`
        })),
 }),
//======================================================================================================
publicationSchema: Joi.object().keys({
   
    type_publication: Joi.string().required().messages({
        "string.base": `"type_publication" of  "publication"  should be a type of 'string'.`,
        "string.empty": `"type_publication" of  "publication"   cannot be an empty field.`
    }),
    type_service: Joi.string().required().messages({
        "string.base": `"type_service" of "publication" should be a type of 'string'.`,
        "string.empty": `"type_service" of "publication"  cannot be an empty field.`
    }).required().messages({
        "any.required": `"the translations of "publication" is required.`,
    }),
    titre: Joi.string().required().messages({
        "string.base": `"titre" of "publication"  should be a type of 'string'.`,
        "string.empty": `"titre" of "publication"   cannot be an empty field.`
    }),
    text: Joi.string().required().messages({
        "string.base": `"text" of "publication"  should be a type of 'string'.`,
        "string.empty": `"text" of "publication"  cannot be an empty field.`
    }),
    etat_en_attend: Joi.boolean().messages({
        "boolean.base": `"etat_en_attend" of "publication"  should be a type of 'boolean'.`,
        "boolean.empty": `"etat_en_attend" of the publication  cannot be an empty field.`
    }),
    ref_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_domaine" of publication should be a type of 'string'.`,
        "string.regex": `"ref_domaine" of publication doesn't mutch the patern.`,
        "string.empty": `"ref_domaine" of publication cannot be an empty field.`
    }),
    ref_sous_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_sous_domaine" of publication should be a type of 'string'.`,
        "string.regex": `"ref_sous_domaine" of publication doesn't mutch the patern.`,
        "string.empty": `"ref_sous_domaine" of publication cannot be an empty field.`
    }),

    lieux_Disp: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of publication should be a type of 'string'.`,
        "string.regex": `"the classe id" of publication doesn't mutch the patern.`,
        "string.empty": `"the classe id" of publication cannot be an empty field.`
    })),
    commentaires: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of publication should be a type of 'string'.`,
        "string.regex": `"the classe id" of publication doesn't mutch the patern.`,
        "string.empty": `"the classe id" of publication cannot be an empty field.`
    })),
 }),
//======================================================================================================
publicationOptionalSchema: Joi.object().keys({
    type_publication: Joi.string().messages({
        "string.base": `"type_publication" of "publication"  should be a type of 'string'.`,
        "string.empty": `"type_publication" of "publication"   cannot be an empty field.`
    }),
    type_service: Joi.string().messages({
        "string.base": `"type_service" of "publication"  should be a type of 'string'.`,
        "string.empty": `"type_service" of "publication"   cannot be an empty field.`
    }),
    titre: Joi.string().messages({
        "string.base": `"titre" of "publication" should be a type of 'string'.`,
        "string.empty": `"titre" of "publication"  cannot be an empty field.`
    }),
    text: Joi.string().messages({
        "string.base": `"text" of "publication" should be a type of 'string'.`,
        "string.empty": `"ext" of "publication" cannot be an empty field.`
    }),
    etat_en_attend: Joi.boolean().messages({
        "boolean.base": `"etat_en_attend" of the publication  should be a type of 'boolean'.`,
        "boolean.empty": `"etat_en_attend" of the publication  cannot be an empty field.`
    }),
    ref_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_domaine" of publication should be a type of 'string'.`,
        "string.regex": `"ref_domaine" of publication doesn't mutch the patern.`,
        "string.empty": `"ref_domaine" of publication cannot be an empty field.`
    }),
    ref_sous_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_sous_domain" of publication should be a type of 'string'.`,
        "string.regex": `"ref_sous_domain" of publication doesn't mutch the patern.`,
        "string.empty": `"ref_sous_domain" of publication cannot be an empty field.`
    }),
    lieux_Disp: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of publication  should be a type of 'string'.`,
        "string.regex": `"the classe id" of publication  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of publication  cannot be an empty field.`
    })),
   commentaires: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of publication  should be a type of 'string'.`,
        "string.regex": `"the classe id" of publication  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of publication  cannot be an empty field.`
    })),
 
 }),
//======================================================================================================
commentaireSchema: Joi.object().keys({
  
    text: Joi.string().required().messages({
        "string.base": `"the text" of the commentaire should be a type of 'string'.`,
        "string.empty": `"the text" of the  commentaire  cannot be an empty field.`
    }),
    ref_publication: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_publication" of commentaire should be a type of 'string'.`,
        "string.regex": `"ref_publication" of commentaire doesn't mutch the patern.`,
        "string.empty": `"ref_publication" of commentaire cannot be an empty field.`
    }),
    ref_individu: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_individu" of commentaire should be a type of 'string'.`,
        "string.regex": `"ref_individu" of commentaire doesn't mutch the patern.`,
        "string.empty": `"ref_individu" of commentaire cannot be an empty field.`
    }),
    }),
//======================================================================================================
commentaireOptionalSchema: Joi.object().keys({
    text: Joi.string().messages({
        "string.base": `"the text" of the commentaire should be a type of 'string'.`,
        "string.empty": `"the text" of the  commentaire  cannot be an empty field.`
    }),
    ref_individu: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_individu" of commentaire should be a type of 'string'.`,
        "string.regex": `"ref_individu" of commentaire doesn't mutch the patern.`,
        "string.empty": `"ref_individu" of commentaire cannot be an empty field.`
    }),
    ref_publication: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_publication" of commentaire should be a type of 'string'.`,
        "string.regex": `"ref_publication" of commentaire doesn't mutch the patern.`,
        "string.empty": `"ref_publication" of commentaire cannot be an empty field.`
    }),
 }),
//======================================================================================================
domaineSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of the  domaine should be a type of 'string'.`,
            "string.empty": `"the language" of the  domaine cannot be an empty field.`
        }),
        nom_domaine: Joi.string().required().messages({
            "string.base": `"nom_domaine" of the domaine should be a type of 'string'.`,
            "string.empty": `"nom_domaine" of the  domaine  cannot be an empty field.`
        }),
        description:Joi.string().allow(null,'')
        }),
    publications_D: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
        "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of domaine  cannot be an empty field.`
    })),
    sous_domaines: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
        "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of domaine  cannot be an empty field.`
    })),
    parent: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
        "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of domaine  cannot be an empty field.`
    }),
    evaluations: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
        "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of domaine  cannot be an empty field.`
    })),
 }),
//======================================================================================================
domaineOptionalSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of the  domaine should be a type of 'string'.`,
            "string.empty": `"the language" of the  domaine cannot be an empty field.`
        }),
        nom_domaine: Joi.string().messages({
            "string.base": `"nom_domaine" of the domaine should be a type of 'string'.`,
            "string.empty": `"nom_domaine" of the  domaine  cannot be an empty field.`
        }),
        description:Joi.string().allow(null,'')
        }),
        publications_D: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
            "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
            "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
            "string.empty": `"the classe id" of domaine  cannot be an empty field.`
        })),
        sous_domaines: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
            "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
            "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
            "string.empty": `"the classe id" of domaine  cannot be an empty field.`
        })),
        parent: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
            "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
            "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
            "string.empty": `"the classe id" of domaine  cannot be an empty field.`
        }),
       evaluations: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
            "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
            "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
            "string.empty": `"the classe id" of domaine  cannot be an empty field.`
        })),
        
 }),
//======================================================================================================
LieuDSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of the  lieuDisponibilite should be a type of 'string'.`,
            "string.empty": `"the language" of the  lieuDisponibilite cannot be an empty field.`
        })
    }),
    pays: Joi.string().messages({
        "string.base": `"pays" of the lieuDisponibilite should be a type of 'string'.`,
        "string.empty": `"pays" of the  lieuDisponibilite  cannot be an empty field.`
    }),
    ville: Joi.string().messages({
        "string.base": `"ville" of the lieuDisponibilite should be a type of 'string'.`,
        "string.empty": `"ville" of the  lieuDisponibilite  cannot be an empty field.`
    }),
    adresse:Joi.string().messages({
        "string.base": `"adresse" of the lieuDisponibilite should be a type of 'string'.`,
        "string.empty": `"adresse" of the  lieuDisponibilite cannot be an empty field.`
    }),
    publications_D: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
        "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of domaine  cannot be an empty field.`
    })),

 }),
//======================================================================================================
directiveSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of  directive should be a type of 'string'.`,
            "string.empty": `"the language" of  directive cannot be an empty field.`
        }),
        titre: Joi.string().required().messages({
            "string.base": `"titre" of directive should be a type of 'string'.`,
            "string.empty": `"titre" of the directive cannot be an empty field.`
        }),
        text: Joi.string().required().messages({
            "string.base": `" text" of directive should be a type of 'string'.`,
            "string.empty": `" text" of directive cannot be an empty field.`
        }),
    }),
    note:Joi.string().allow(null,''),
    type_directive: Joi.string().required().messages({
        "string.base": `"type_directive" of  directive should be a type of 'string'.`,
        "string.empty": `"type_directive" of  directive cannot be an empty field.`
    }),
   evaluations: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of directive  should be a type of 'string'.`,
        "string.regex": `"the classe id" of directive  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of directive  cannot be an empty field.`
    })),
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of directive should be a type of 'string'.`,
        "string.regex": `"the classe id" of directive doesn't mutch the patern.`,
        "string.empty": `"the classe id" of directive cannot be an empty field.`
    }),
    ref_bilan: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of directive  should be a type of 'string'.`,
        "string.regex": `"the classe id" of directive  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of directive  cannot be an empty field.`
    }),
 }),
//======================================================================================================
directiveOptionalSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of  directive should be a type of 'string'.`,
            "string.empty": `"the language" of  directive cannot be an empty field.`
        }),
        titre: Joi.string().messages({
            "string.base": `"titre" of directive should be a type of 'string'.`,
            "string.empty": `"titre" of the directive cannot be an empty field.`
        }),
        text: Joi.string().messages({
            "string.base": `"text" of directive should be a type of 'string'.`,
            "string.empty": `"text" of the directive cannot be an empty field.`
        }),
      
    }),
    note:Joi.string().allow(null,''),
    type_directive: Joi.string().messages({
        "string.base": `"type_directive" of  directive should be a type of 'string'.`,
        "string.empty": `"type_directive" of  directive cannot be an empty field.`
    }),
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of directive  should be a type of 'string'.`,
        "string.regex": `"the classe id" of directive  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of directive  cannot be an empty field.`
    }),
    evaluations: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of directive  should be a type of 'string'.`,
        "string.regex": `"the classe id" of directive  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of directive  cannot be an empty field.`
    })),
    ref_bilan: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of directive  should be a type of 'string'.`,
        "string.regex": `"the classe id" of directive  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of directive  cannot be an empty field.`
    }),
 }),
//======================================================================================================
questionnaireSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of  questionnaire should be a type of 'string'.`,
            "string.empty": `"the language" of  questionnaire cannot be an empty field.`
        }),
        thème: Joi.string().required().messages({
            "string.base": `"thème" of  questionnaire should be a type of 'string'.`,
            "string.empty": `"thème" of  questionnaire cannot be an empty field.`
        }),
        catégorie: Joi.string().required().messages({
            "string.base": `"catégorie" of questionnaire should be a type of 'string'.`,
            "string.empty": `"catégorie" of questionnaire cannot be an empty field.`
        }),
        sous_catégorie: Joi.string().messages({
            "string.base": `"sous_catégorie" of questionnaire should be a type of 'string'.`,
            "string.empty": `"sous_catégorie" of questionnaire cannot be an empty field.`
        }),
        etat_questionnaire: Joi.string().messages({
            "string.base": `"etat_questionnaire" of questionnaire should be a type of 'string'.`,
            "string.empty": `"etat_questionnaire" of questionnaire cannot be an empty field.`
        }),
    }),
    date_validation: Joi.date().messages({
        "string.base": `"date_validation" of directive should be a type of 'string'.`,
        "string.empty": `"date_validation" of directive cannot be an empty field.`
    }),
    ref_resultat: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_resultat" of questionnaire should be a type of 'string'.`,
        "string.regex": `"ref_resultat" of questionnaire doesn't mutch the patern.`,
        "string.empty": `"ref_resultat" of questionnaire cannot be an empty field.`
    }),
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_evaluation" of questionnaire should be a type of 'string'.`,
        "string.regex": `"ref_evaluation" of questionnaire doesn't mutch the patern.`,
        "string.empty": `"ref_evaluation" of questionnaire cannot be an empty field.`
    }),
    
 }),
//======================================================================================================
questionnaireOptionalSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of  questionnaire should be a type of 'string'.`,
            "string.empty": `"the language" of  questionnaire cannot be an empty field.`
        }),
        thème: Joi.string().messages({
            "string.base": `"thème" of  questionnaire should be a type of 'string'.`,
            "string.empty": `"thème" of  questionnaire cannot be an empty field.`
        }),
        catégorie: Joi.string().messages({
            "string.base": `"catégorie" of questionnaire should be a type of 'string'.`,
            "string.empty": `"catégorie" of the questionnaire cannot be an empty field.`
        }),
        sous_catégorie: Joi.string().messages({
            "string.base": `"sous_catégorie" of questionnaire should be a type of 'string'.`,
            "string.empty": `"sous_catégorie" of questionnaire cannot be an empty field.`
        }),
        etat_questionnaire: Joi.string().messages({
            "string.base": `"etat_questionnaire" of questionnaire should be a type of 'string'.`,
            "string.empty": `"etat_questionnaire" of questionnaire cannot be an empty field.`
        }),
    }),
    date_validation: Joi.date().messages({
        "string.base": `"date_validation" of questionnaire should be a type of 'string'.`,
        "string.empty": `"date_validation" of questionnaire cannot be an empty field.`
    }),
    ref_resultat: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_resultat" of questionnaire should be a type of 'string'.`,
        "string.regex": `"ref_resultat" of  questionnaire doesn't mutch the patern.`,
        "string.empty": `"ref_resultat" of  questionnaire cannot be an empty field.`
    }),
   
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_evaluation" of questionnaire should be a type of 'string'.`,
        "string.regex": `"ref_evaluation" of  questionnaire doesn't mutch the patern.`,
        "string.empty": `"ref_evaluation" of  questionnaire cannot be an empty field.`
    }),

 }),
//======================================================================================================
resultatSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of  resultat should be a type of 'string'.`,
            "string.empty": `"the language" of  resultat cannot be an empty field.`
        }),
        remarque: Joi.string().required().messages({
            "string.base": `"remarque" of  resultat should be a type of 'string'.`,
            "string.empty": `"remarque" of  resultat cannot be an empty field.`
        }),
    }),
    note: Joi.number().required().messages({
        "number.base": `"note" of resultat should be a type of 'string'.`,
        "string.empty": `"note" of resultat cannot be an empty field.`
    }),
    ref_questionnaire: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_questionnaire" of resultat should be a type of 'string'.`,
        "string.regex": `"ref_questionnaire" of resultat doesn't mutch the patern.`,
        "string.empty": `"ref_questionnaire" of resultat cannot be an empty field.`
    }),
 
 }),
//======================================================================================================
resultatOptionalSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of  resultat should be a type of 'string'.`,
            "string.empty": `"the language" of  resultat cannot be an empty field.`
        }),
        remarque: Joi.string().messages({
            "string.base": `"remarque" of  resultat should be a type of 'string'.`,
            "string.empty": `"remarque" of  resultat cannot be an empty field.`
        }),
     
    }),
    note: Joi.number().messages({
        "number.base": `"note" of resultat should be a type of 'string'.`,
        "string.empty": `"note" of resultat cannot be an empty field.`
    }),
    ref_questionnaire: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_questionnaire" of resultat should be a type of 'string'.`,
        "string.regex": `"ref_questionnaire" of resultat doesn't mutch the patern.`,
        "string.empty": `"ref_questionnaire" of resultat cannot be an empty field.`
    }),
 
 }),
//======================================================================================================
evaluationSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of evaluation should be a type of 'string'.`,
            "string.empty": `"the language" of evaluation cannot be an empty field.`
        }),
        titre: Joi.string().required().messages({
            "string.base": `"titre" of evaluation should be a type of 'string'.`,
            "string.empty": `"titre" of evaluation cannot be an empty field.`
        }),
        description: Joi.string().required().messages({
            "string.base": `"description" of evaluation should be a type of 'string'.`,
            "string.empty": `"description" of evaluation cannot be an empty field.`
        }),
       
    }),
    nbrQuestionnaires:Joi.number().required().messages({
        "number.base": `"nbrQuestionnaires" of evaluation should be a type of 'string'.`,
        "number.empty": `"nbrQuestionnaires" of evaluation cannot be an empty field.`
    }),
    Duree: Joi.string().required().messages({
        "string.base": `"Duree" of evaluation should be a type of 'string'.`,
        "string.empty": `"Duree" of evaluation cannot be an empty field.`
    }),
    ref_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_domaine" of evaluation should be a type of 'string'.`,
        "string.regex": `"ref_domaine" of evaluation doesn't mutch the patern.`,
        "string.empty": `"ref_domaine" of evaluation cannot be an empty field.`
    }),
    ref_sous_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_sous_domaine" of evaluation should be a type of 'string'.`,
        "string.regex": `"ref_sous_domaine" of evaluation doesn't mutch the patern.`,
        "string.empty": `"ref_sous_domaine" of evaluation cannot be an empty field.`
    }),
    directives: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of evaluation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of evaluation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of evaluation  cannot be an empty field.`
    })),
 }),
//======================================================================================================
evaluationOptionalSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of evaluation should be a type of 'string'.`,
            "string.empty": `"the language" of evaluation cannot be an empty field.`
        }),
        titre: Joi.string().messages({
            "string.base": `"titre" of evaluation should be a type of 'string'.`,
            "string.empty": `"titre" of evaluation cannot be an empty field.`
        }),
        description: Joi.string().messages({
            "string.base": `"description" of evaluation should be a type of 'string'.`,
            "string.empty": `"description" of evaluation cannot be an empty field.`
        }),
       
    }),
    Duree: Joi.string().messages({
        "number.base": `"Duree" of evaluation should be a type of 'string'.`,
        "string.empty": `"Duree" of evaluation cannot be an empty field.`
    }),
    nbrQuestionnaires:Joi.number().messages({
        "number.base": `"nbrQuestionnaires" of evaluation should be a type of 'string'.`,
        "number.empty": `"nbrQuestionnaires" of evaluation cannot be an empty field.`
    }),
    ref_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_domaine" of evaluation should be a type of 'string'.`,
        "string.regex": `"ref_domaine" of evaluation doesn't mutch the patern.`,
        "string.empty": `"ref_domaine" of evaluation cannot be an empty field.`
    }),
    ref_sous_domaine: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_spous_domaine" of evaluation should be a type of 'string'.`,
        "string.regex": `"ref_spous_domaine" of evaluation doesn't mutch the patern.`,
        "string.empty": `"ref_spous_domaine" of evaluation cannot be an empty field.`
    }),
    directives: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of evaluation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of evaluation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of evaluation  cannot be an empty field.`
    })),
 }),
//======================================================================================================
messageSchema: Joi.object().keys({
    firstName: Joi.string().required().messages({
        "string.base": `" the firstName" of  message should be a type of 'string'.`,
        "string.empty": `"the firstName" of message  cannot be an empty field.`
    }),
    lastName: Joi.string().required().messages({
        "string.base": `"the lastName" of message should be a type of 'string'.`,
        "string.empty": `"the lastName" of message  cannot be an empty field.`
    }),
    email:Joi.string().required().email().messages({
        "string.base": `"the email of message should be a type of 'string'.`,
        "string.empty": `"the email of message  cannot be an empty field.`
    }),
    message: Joi.string().required().messages({
        "string.base": `"the message" of message should be a type of 'string'.`,
        "string.empty": `"the message" of  message  cannot be an empty field.`
    }),
}),
//======================================================================================================
taxonomieSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().required().messages({
            "string.base": `"the language" of the taxonomie should be a type of 'string'.`,
            "string.empty": `"the language" of the taxonomie cannot be an empty field.`
        }),
        description:Joi.string().allow(null,''),
        designation: Joi.string().messages({
            "string.base": `" designation" of the taxonomie should be a type of 'string'.`,
            "string.empty": `"designation" of the  taxonomie  cannot be an empty field.`
        }),
        }),
    code: Joi.string().required().messages({
            "string.base": `" code" of the taxonomie should be a type of 'string'.`,
            "string.empty": `"code" of the  taxonomie  cannot be an empty field.`
        }),
    sous_taxonomies: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of taxonomie  should be a type of 'string'.`,
        "string.regex": `"the classe id" of taxonomie  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of taxonomie  cannot be an empty field.`
    })),
    parent: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of taxonomie  should be a type of 'string'.`,
        "string.regex": `"the classe id" of taxonomie  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of taxonomie  cannot be an empty field.`
    }),
  
 }),
//======================================================================================================
taxonomieOptionalSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of the taxonomie should be a type of 'string'.`,
            "string.empty": `"the language" of the taxonomie cannot be an empty field.`
        }),
        description:Joi.string().allow(null,''),
        designation: Joi.string().messages({
            "string.base": `" designation" of the taxonomie should be a type of 'string'.`,
            "string.empty": `"designation" of the  taxonomie  cannot be an empty field.`
        }),
        }),
    code: Joi.string().messages({
            "string.base": `" code" of the taxonomie should be a type of 'string'.`,
            "string.empty": `"code" of the  taxonomie  cannot be an empty field.`
        }),
    sous_taxonomies: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of taxonomie  should be a type of 'string'.`,
        "string.regex": `"the classe id" of taxonomie  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of taxonomie  cannot be an empty field.`
    })),
    parent: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of taxonomie  should be a type of 'string'.`,
        "string.regex": `"the classe id" of taxonomie  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of taxonomie  cannot be an empty field.`
    }),
  
 }),
//======================================================================================================
participationSchema: Joi.object().keys({

    note: Joi.number().allow(null,''),

    type_participation: Joi.string().required().messages({
            "string.base":`"type_participation" of participation should be a type of 'string'.`,
            "string.empty": `"type_participation" of participation  cannot be an empty field.`
    }),
    etat_en_attend: Joi.boolean().messages({
        "boolean.base": `"etat_en_attend" of "participation"  should be a type of 'boolean'.`,
        "boolean.empty": `"etat_en_attend" of participation  cannot be an empty field.`
    }),
    ref_individu: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_participationQ: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    })),
    ref_bilan: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    
}),
//======================================================================================================
participationOptionalSchema: Joi.object().keys({

    note: Joi.number().allow(null,''),

    type_participation: Joi.string().messages({
            "string.base":`"type_participation" of participation should be a type of 'string'.`,
            "string.empty": `"type_participation" of participation  cannot be an empty field.`
    }),
    etat_en_attend: Joi.boolean().messages({
        "boolean.base": `"etat_en_attend" of "participation"  should be a type of 'boolean'.`,
        "boolean.empty": `"etat_en_attend" of participation  cannot be an empty field.`
    }),
    ref_individu: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_participationQ: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    })),
    ref_bilan: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation cannot be an empty field.`
    }),
    
 
 }),
//======================================================================================================
participationQSchema: Joi.object().keys({

    note: Joi.number().allow(null,''),

    type_participation: Joi.string().required().messages({
            "string.base":`"type_participation" of participation should be a type of 'string'.`,
            "string.empty": `"type_participation" of participation  cannot be an empty field.`
    }),
    ref_participation: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_questionnaire: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    
 
 }),
//======================================================================================================
participationOptionalQSchema: Joi.object().keys({

    note: Joi.number().allow(null,''),

    type_participation: Joi.string().messages({
            "string.base":`"type_participation" of participation should be a type of 'string'.`,
            "string.empty": `"type_participation" of participation cannot be an empty field.`
    }),
    ref_participation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_evaluation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation  should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation  cannot be an empty field.`
    }),
    ref_questionnaire: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of participation should be a type of 'string'.`,
        "string.regex": `"the classe id" of participation doesn't mutch the patern.`,
        "string.empty": `"the classe id" of participation cannot be an empty field.`
    }),
 }),
//======================================================================================================
BilanSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of the  Bilan should be a type of 'string'.`,
            "string.empty": `"the language" of the Bilan cannot be an empty field.`
        }),
        titre_Bilan: Joi.string().required().messages({
            "string.base": `"titre_Bilan" of the Bilan should be a type of 'string'.`,
            "string.empty": `"titre_Bilan" of the  Bilan  cannot be an empty field.`,
            "any.required": `"titre_bilan" of the bilan is required.`,
        }),
        synthese: Joi.string().required().messages({
            "string.base": `"synthese" of the Bilan should be a type of 'string'.`,
            "string.empty": `"synthese" of the  Bilan  cannot be an empty field.`,
            "any.required": `"synthèse" of the bilan is required.`,
        }),  
    }).required().messages({
        "any.required": `"the translations of the Bilan is required.`,
    }),
    auteur: Joi.string().messages({
        "string.base": `"auteur" of the Bilan should be a type of 'string'.`,
        "string.empty": `"auteur" of the  Bilan  cannot be an empty field.`,
    }),  

    ref_participation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_participation" of bilan should be a type of 'string'.`,
        "string.regex": `"ref_participation" of bilan doesn't mutch the patern.`,
        "string.empty": `"ref_participation" of bilan cannot be an empty field.`
    }),
    directives: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of Bilan  should be a type of 'string'.`,
        "string.regex": `"the classe id" of Bilan  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of Bilan  cannot be an empty field.`
    })),
    
 }),
//======================================================================================================
BilanOptionalSchema: Joi.object().keys({
    translations: Joi.object().keys({
        language: Joi.string().messages({
            "string.base": `"the language" of the  Bilan should be a type of 'string'.`,
            "string.empty": `"the language" of the  Bilan cannot be an empty field.`
        }),
        titre_Bilan: Joi.string().messages({
            "string.base": `"titre_Bilan" of the Bilan should be a type of 'string'.`,
            "string.empty": `"titre_Bilan" of the  Bilan  cannot be an empty field.`
        }),
        synthese: Joi.string().messages({
            "string.base": `"synthese" of the Bilan should be a type of 'string'.`,
            "string.empty": `"synthese" of the  Bilan  cannot be an empty field.`
        }),
    }),
    auteur: Joi.string().messages({
        "string.base": `"auteur" of the Bilan should be a type of 'string'.`,
        "string.empty": `"auteur" of the  Bilan  cannot be an empty field.`,
    }),  
    ref_participation: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"ref_participation" of bilan should be a type of 'string'.`,
        "string.regex": `"ref_participation" of  bilan doesn't mutch the patern.`,
        "string.empty": `"ref_participation" of  bilan cannot be an empty field.`
    }),
    directives: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
        "string.base": `"the classe id" of bilan  should be a type of 'string'.`,
        "string.regex": `"the classe id" of bilan  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of bilan  cannot be an empty field.`
    })),

 }),
//======================================================================================================

//======================================================================================================

//======================================================================================================

//======================================================================================================

//======================================================================================================

//======================================================================================================

//======================================================================================================
idSchema: Joi.object().keys({
    param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.base": `"the classe id" of domaine  should be a type of 'string'.`,
        "string.regex": `"the classe id" of domaine  doesn't mutch the patern.`,
        "string.empty": `"the classe id" of domaine  cannot be an empty field.`,
        "any.required": `"the classe id" of domaine  is required.`,
    })
})

    }

}
