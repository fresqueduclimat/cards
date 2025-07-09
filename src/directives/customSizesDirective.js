export default {
    beforeMount(el, binding) {
        const scaleFactor = 1.00;
        const currentLocale = binding.instance?.$i18n?.locale;
        if (currentLocale === 'fr') {
            const c9text = el.querySelectorAll('#card9-back-text0');
            c9text.forEach(text => {
                text.style.fontSize = `${26.6 * scaleFactor}px`;
            });

            const c11text = el.querySelectorAll('#card11-back-text0');
            c11text.forEach(text => {
                text.style.fontSize = `${26.6 * scaleFactor}px`;
            });

            const c15text = el.querySelectorAll('#card15-back-text0');
            c15text.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            });

            const c20text = el.querySelectorAll('#card20-back-text0');
            c20text.forEach(text => {
                text.style.fontSize = `${25.8 * scaleFactor}px`;
            });

            const c27text = el.querySelectorAll('#card27-back-text0');
            c27text.forEach(text => {
                text.style.fontSize = `${25.8 * scaleFactor}px`;
            });

            const c29text = el.querySelectorAll('#card29-back-text0');
            c29text.forEach(text => {
                text.style.fontSize = `${31.8 * scaleFactor}px`;
            });

            const c30text = el.querySelectorAll('#card30-back-text0');
            c30text.forEach(text => {
                text.style.fontSize = `${29.2 * scaleFactor}px`;
            });

            const c34text = el.querySelectorAll('#card34-back-text0');
            c34text.forEach(text => {
                text.style.fontSize = `${29.2 * scaleFactor}px`;
            });

            const c35text = el.querySelectorAll('#card35-back-text0');
            c35text.forEach(text => {
                text.style.fontSize = `${30.9 * scaleFactor}px`;
            });

            const c37text = el.querySelectorAll('#card37-back-text0');
            c37text.forEach(text => {
                text.style.fontSize = `${30 * scaleFactor}px`;
            });

            const c39text = el.querySelectorAll('#card39-back-text0');
            c39text.forEach(text => {
                text.style.fontSize = `${30 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'en') {
            const c26text = el.querySelectorAll('#card26-back-text0');
            c26text.forEach(text => {
                text.style.fontSize = `${28.4 * scaleFactor}px`;
            });
            const c41text = el.querySelectorAll('#card41-back-text0');
            c41text.forEach(text => {
                text.style.fontSize = `${24 * scaleFactor}px`;
            });
        }
        if (currentLocale === 'fa') {
            const c11text1 = el.querySelectorAll('#card11-fixed-text1');
            c11text1.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c11text2 = el.querySelectorAll('#card11-fixed-text2');
            c11text2.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c11text3 = el.querySelectorAll('#card11-fixed-text3');
            c11text3.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c11text4 = el.querySelectorAll('#card11-fixed-text4');
            c11text4.forEach(text => {
                text.style.fontSize = `${14 * scaleFactor}px`;
            });
            const c19text2 = el.querySelectorAll('#card19-text2');
            c19text2.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            });
            const c19text3 = el.querySelectorAll('#card19-text3');
            c19text3.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            });
            const c22text1 = el.querySelectorAll('#card22-fixed-text1');
            c22text1.forEach(text => {
                text.style.fontSize = `${16 * scaleFactor}px`;
            });
            const c22text2 = el.querySelectorAll('#card22-fixed-text2');
            c22text2.forEach(text => {
                text.style.fontSize = `${16 * scaleFactor}px`;
            });
            const c22text3 = el.querySelectorAll('#card22-fixed-text3');
            c22text3.forEach(text => {
                text.style.fontSize = `${16 * scaleFactor}px`;
            });
            const c21text1 = el.querySelectorAll('#card21-text6');
            c21text1.forEach(text => {
                text.style.fontSize = `${16.5 * scaleFactor}px`;
            });
            const c21text2 = el.querySelectorAll('#card21-text7');
            c21text2.forEach(text => {
                text.style.fontSize = `${16.5 * scaleFactor}px`;
            });
            const c21text3 = el.querySelectorAll('#card21-text8');
            c21text3.forEach(text => {
                text.style.fontSize = `${16.5 * scaleFactor}px`;
            }); 
        }
        if (currentLocale === 'us') {
            const c21text7 = el.querySelectorAll('#card21-text7');
            c21text7.forEach(text => {
                text.style.fontSize = `${15.5 * scaleFactor}px`;
            }); 
        }
        if (currentLocale === 'bg') {
            const c32text0 = el.querySelectorAll('#card32-back-text0');
            c32text0.forEach(text => {
                text.style.fontSize = `${28 * scaleFactor}px`;
            }); 
            const c11text0 = el.querySelectorAll('#card11-back-text0');
            c11text0.forEach(text => {
                text.style.fontSize = `${23 * scaleFactor}px`;
            }); 
            const c24text0 = el.querySelectorAll('#card24-back-text0');
            c24text0.forEach(text => {
                text.style.fontSize = `${31 * scaleFactor}px`;
            });    
        }
        if (currentLocale === 'vi') {
            const c21text0 = el.querySelectorAll('#card21-back-text0');
            c21text0.forEach(text => {
                text.style.fontSize = `${19 * scaleFactor}px`;
            }); 
            const c19text0 = el.querySelectorAll('#card19-back-text0');
            c19text0.forEach(text => {
                text.style.fontSize = `${20 * scaleFactor}px`;
            }); 
            const c27text0 = el.querySelectorAll('#card27-back-text0');
            c27text0.forEach(text => {
                text.style.fontSize = `${23 * scaleFactor}px`;
            });    
        }
        if (currentLocale === 'cs') {
            const c21text0 = el.querySelectorAll('#card21-back-text0');
            c21text0.forEach(text => {
                text.style.fontSize = `${24 * scaleFactor}px`;
            });  
        }
        if (currentLocale === 'zh') {
            const c21text2 = el.querySelectorAll('#card21-label2');
            c21text2.forEach(text => {
                text.style.left = `${504 * scaleFactor}px`;
                text.style.height = `${47 * scaleFactor}px`;
                text.style.fontSize = `${10.2 * scaleFactor}px`;
            });  
            const c15text4 = el.querySelectorAll('#card15-label4');
            c15text4.forEach(text => {
                text.style.fontSize = `${9 * scaleFactor}px`;
            });  
            const c15text5 = el.querySelectorAll('#card15-label5');
            c15text5.forEach(text => {
                text.style.fontSize = `${9 * scaleFactor}px`;
            });  
            const c15text9 = el.querySelectorAll('#card15-label9');
            c15text9.forEach(text => {
                text.style.fontSize = `${9 * scaleFactor}px`;
            });  
            const c15text12 = el.querySelectorAll('#card15-label12');
            c15text12.forEach(text => {
                text.style.fontSize = `${11 * scaleFactor}px`;
            });  
            const c24text1 = el.querySelectorAll('#card24-label1');
            c24text1.forEach(text => {
                text.style.fontSize = `${12 * scaleFactor}px`;
            }); 
        }

        if (currentLocale === 'hk') {
            const c21text2 = el.querySelectorAll('#card22-label3');
            c21text2.forEach(text => {
                text.style.fontSize = `${9 * scaleFactor}px`;
            });  
        }

        if (currentLocale === 'ko') {
            const c7label0 = el.querySelectorAll('#card7-back-text0');
            c7label0.forEach(text => {
                text.style.fontSize = `${31 * scaleFactor}px`;
            }); 
            
            const c28label0 = el.querySelectorAll('#card28-back-text0');
            c28label0.forEach(text => {
                text.style.fontSize = `${31 * scaleFactor}px`;
            }); 
        }

        if (currentLocale === 'th') {
            const c7label0 = el.querySelectorAll('#card7-back-text0');
            c7label0.forEach(text => {
                text.style.fontSize = `${26 * scaleFactor}px`;
            }); 
            
            const c29label0 = el.querySelectorAll('#card29-back-text0');
            c29label0.forEach(text => {
                text.style.fontSize = `${31 * scaleFactor}px`;
            }); 
            
            const c30label0 = el.querySelectorAll('#card30-back-text0');
            c30label0.forEach(text => {
                text.style.fontSize = `${27 * scaleFactor}px`;
            }); 

            const c18label0 = el.querySelectorAll('#card18-back-text0');
            c18label0.forEach(text => {
                text.style.fontSize = `${30 * scaleFactor}px`;
            }); 

            const c22label0 = el.querySelectorAll('#card22-back-text0');
            c22label0.forEach(text => {
                text.style.fontSize = `${30 * scaleFactor}px`;
            }); 
            
            const c3label0 = el.querySelectorAll('#card3-back-text0');
            c3label0.forEach(text => {
                text.style.fontSize = `${32 * scaleFactor}px`;
            }); 

            const c24label0 = el.querySelectorAll('#card24-back-text0');
            c24label0.forEach(text => {
                text.style.fontSize = `${25 * scaleFactor}px`;
            }); 

            const c14label0 = el.querySelectorAll('#card14-back-text0');
            c14label0.forEach(text => {
                text.style.fontSize = `${20 * scaleFactor}px`;
            }); 

            const c16label0 = el.querySelectorAll('#card16-back-text0');
            c16label0.forEach(text => {
                text.style.fontSize = `${19  * scaleFactor}px`;
            }); 

            const c17label0 = el.querySelectorAll('#card17-back-text0');
            c17label0.forEach(text => {
                text.style.fontSize = `${32  * scaleFactor}px`;
            }); 

            const c27label0 = el.querySelectorAll('#card27-back-text0');
            c27label0.forEach(text => {
                text.style.fontSize = `${24  * scaleFactor}px`;
            }); 

            const c38label0 = el.querySelectorAll('#card38-back-text0');
            c38label0.forEach(text => {
                text.style.fontSize = `${32  * scaleFactor}px`;
            }); 

            const c41label0 = el.querySelectorAll('#card41-back-text0');
            c41label0.forEach(text => {
                text.style.fontSize = `${20  * scaleFactor}px`;
            }); 
            
            
        }
    },
};