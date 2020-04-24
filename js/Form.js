class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("www.SurveysForYou.com")
        title.position(130,0)

        var input = createInput("Fill Name")
        var button = createButton("Start")
        var greeting = createElement("h3")
        var greeting2 = createElement("h3")
        
        input.position(130,160)
        button.position(250,200)

        button.mousePressed(function (){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello "+ name  )
            greeting.position(130,100)
            greeting2.html("choose the desired survey from below")
            greeting2.position(90,120)
            
            var racism = createButton("Racism")
            racism.position(100,170)


            racism.mousePressed(function (){
                input.hide()
                button.hide()
                racism.hide()
                op.hide()
                cc.hide()
                imigration.hide()
                greeting.hide()
                greeting2.hide()
    
                var name = input.value()
                playerCount+=1
                player.update(name)
                player.updateCount(playerCount)
                var greet = createElement("h3")
                greet.html("Welcome to Racism Surveys")
                greet.position(100,100)

                var q1 = createElement("h4") 
                q1.html("Q.How would u stop racism around the world?")
                q1.position(20,160)

                var input1 = createInput("Answer.")
                input1.position(90,200)

                var q2 = createElement("h4")
                q2.html("Q.Do u opine that a particular Govt. ")
                q2.position(20,230)
                var qq2 = createElement("h4")
                qq2.html(" should take action on this issue?")
                qq2.position(20,260)

                var o1 = createButton("Yes")
                o1.position(90,310)

                var o2 = createButton("No")
                o2.position(140,310)

               // var done = createButton("done")
                //done.position(100,100)

                o1.mousePressed(function(){
                    var img = createElement("h4")
                    img.html("Thank You for completing our surveys.")
                    img.position(90,350)
                    var img1 = createElement("h4")
                    img1.html("click on DONE for the results.")
                    img1.position(90,370)

                    var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet.hide()
                        q1.hide()
                        input1.hide()
                        q2.hide()
                        o1.hide()
                        o2.hide()
                        qq2.hide()

                        img.hide()
                        img1.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("47/100")
                        ResulT.position(50,250)

                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })
                    })
                })
                o2.mousePressed(function(){
                    var img2 = createElement("h4")
                    img2.html("Thank You for completing our surveys.")
                    img2.position(90,350)
                    var img3 = createElement("h4")
                    img3.html("click on DONE for the results.")
                    img3.position(90,370)  

                    var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet.hide()
                        q1.hide()
                        input1.hide()
                        q2.hide()
                        o1.hide()
                        o2.hide()
                        qq2.hide()

                        img2.hide()
                        img3.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("47/100")
                        ResulT.position(50,250)

                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })
                    })
                })
                
                
            })
    

            var cc = createButton("Climate Change")
            cc.position(100,200)


            cc.mousePressed(function (){
                input.hide()
                button.hide()
                racism.hide()
                op.hide()
                cc.hide()
                imigration.hide()
                greeting.hide()
                greeting2.hide()
    
                var name = input.value()
                playerCount+=1
                player.update(name)
                player.updateCount(playerCount)
                var greet1 = createElement("h3")
                greet1.html("Welcome to Climate Change Surveys")
                greet1.position(100,100)

                var q11 = createElement("h4") 
                q11.html("Q.What are your efforts to curb climate change?")
                q11.position(20,160)

                var input2 = createInput("Answer.")
                input2.position(90,200)

                var q22 = createElement("h4")
                q22.html("Q.Do u opine we humans  ")
                q22.position(20,230)
                var qq22 = createElement("h4")
                qq22.html(" are  the leading cause of climate change?")
                qq22.position(20,260)

                var o11 = createButton("Yes")
                o11.position(90,310)

                var o22 = createButton("No")
                o22.position(140,310)

                o11.mousePressed(function(){
                    var img0 = createElement("h4")
                    img0.html("Thank You for completing our surveys.")
                    img0.position(90,350)
                    var img11 = createElement("h4")
                    img11.html("click on DONE for the results.")
                    img11.position(90,370)

                     var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet1.hide()
                        q11.hide()
                        input2.hide()
                        q22.hide()
                        o11.hide()
                        o22.hide()
                        qq22.hide()

                        img0.hide()
                        img11.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("85/100")
                        ResulT.position(50,250)

                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })
                    })
                })
                o22.mousePressed(function(){
                    var img22 = createElement("h4")
                    img22.html("Thank You for completing our surveys.")
                    img22.position(90,350)
                    var img33 = createElement("h4")
                    img33.html("click on DONE for the results.")
                    img33.position(90,370)  

                    var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet1.hide()
                        q11.hide()
                        input2.hide()
                        q22.hide()
                        o11.hide()
                        o22.hide()
                        qq22.hide()

                        img22.hide()
                        img.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("85/100")
                        ResulT.position(50,250)
                        
                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })

                    })
                })
                
            })
    

            var imigration = createButton("Imigration")
            imigration.position(100,230)


            imigration.mousePressed(function (){
                input.hide()
                button.hide()
                racism.hide()
                op.hide()
                cc.hide()
                imigration.hide()
                greeting.hide()
                greeting2.hide()
    
                var name = input.value()
                playerCount+=1
                player.update(name)
                player.updateCount(playerCount)
                var greet2 = createElement("h3")
                greet2.html("Welcome to Immigrant Surveys")
                greet2.position(100,100)

                var Q1 = createElement("h4") 
                Q1.html("Q.Do u support immigrants?Why?")
                Q1.position(20,160)

                var input3 = createInput("Answer.")
                input3.position(90,200)

                var Q2 = createElement("h4")
                Q2.html("Q.Do u opine illegal immigrants ")
                Q2.position(20,230)
                var QQ2 = createElement("h4")
                QQ2.html(" should be allowed to stay in the country?")
                QQ2.position(20,260)

                var O1 = createButton("Yes")
                O1.position(90,310)

                var O2 = createButton("No")
                O2.position(140,310)

                O1.mousePressed(function(){
                    var Img = createElement("h4")
                    Img.html("Thank You for completing our surveys.")
                    Img.position(90,350)
                    var Img1 = createElement("h4")
                    Img1.html("click on DONE for the results.")
                    Img1.position(90,370)

                    var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet2.hide()
                        Q1.hide()
                        input3.hide()
                        Q2.hide()
                        O1.hide()
                        O2.hide()
                        QQ2.hide()

                        Img.hide()
                        Img1.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("28/100")
                        ResulT.position(50,250)

                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })
                    })
                })
                O2.mousePressed(function(){
                    var Img2 = createElement("h4")
                    Img2.html("Thank You for completing our surveys.")
                    Img2.position(90,350)
                    var Img3 = createElement("h4")
                    Img3.html("click on DONE for the results.")
                    Img3.position(90,370)  

                    var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet2.hide()
                        Q1.hide()
                        input3.hide()
                        Q2.hide()
                        O1.hide()
                        O2.hide()
                        QQ2.hide()

                        Img2.hide()
                        Img3.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("28/100")
                        ResulT.position(50,250)

                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })
                    })
                })
                
            })

            var op = createButton("Over Population")
            op.position(100,260)

            op.mousePressed(function (){
                input.hide()
                button.hide()
                racism.hide()
                op.hide()
                cc.hide()
                imigration.hide()
                greeting.hide()
                greeting2.hide()
    
                var name = input.value()
                playerCount+=1
                player.update(name)
                player.updateCount(playerCount)
                var greet3 = createElement("h3")
                greet3.html("Welcome to Over Population Surveys")
                greet3.position(100,100)

                var Q11 = createElement("h4") 
                Q11.html("Q.Why do u think Africa is overpopulated?")
                Q11.position(20,160)

                var input4 = createInput("Answer.")
                input4.position(90,200)

                var Q22 = createElement("h4")
                Q22.html("Q.Do u opine a developed country  ")
                Q22.position(20,230)
                var QQ22 = createElement("h4")
                QQ22.html("is usually more overpopulated then others?")
                QQ22.position(20,260)

                var OO1 = createButton("Yes")
                OO1.position(90,310)

                var OO2 = createButton("No")
                OO2.position(140,310)

                OO1.mousePressed(function(){
                    var Img0 = createElement("h4")
                    Img0.html("Thank You for completing our surveys.")
                    Img0.position(90,350)
                    var Img11 = createElement("h4")
                    Img11.html("click on DONE for the results.")
                    Img11.position(90,370)

                    var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet3.hide()
                        Q11.hide()
                        input4.hide()
                        Q22.hide()
                        OO1.hide()
                        OO2.hide()
                        QQ22.hide()

                        Img0.hide()
                        Img11.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("77/100")
                        ResulT.position(50,250)

                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })
                    })
                })
                OO2.mousePressed(function(){
                    var Img22 = createElement("h4")
                    Img22.html("Thank You for completing our surveys.")
                    Img22.position(90,350)
                    var Img33 = createElement("h4")
                    Img33.html("click on DONE for the results.")
                    Img33.position(90,370)  

                    var done = createButton("DONE")
                    done.position(100,410)

                    done.mousePressed(function(){
                        greet3.hide()
                        Q11.hide()
                        input4.hide()
                        Q22.hide()
                        OO1.hide()
                        OO2.hide()
                        QQ22.hide()

                        Img22.hide()
                        Img33.hide()
                        done.hide()


                        var result = createElement("h4")
                        result.html("These are how many people have ")
                        result.position(20,150)
                        var Result = createElement("h4")
                        Result.html("the same answers as u:")
                        Result.position(20,180)
                        var ResulT = createElement("h2")
                        ResulT.html("77/100")
                        ResulT.position(50,250)

                        var next = createButton("Other Surveys")
                        next.position(300,300)

                        next.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var os = createElement("h1")
                            os.html("Other Surveys")
                            os.position(20,150)

                            var etc = createElement("h3")
                            etc.html("Social stratification")
                            etc.position(20,250)

                            var etc = createElement("h3")
                            etc.html("Economic issues")
                            etc.position(20,270)

                            var etc = createElement("h3")
                            etc.html("Social disorganization")
                            etc.position(20,290)

                        })

                        var end = createButton("End Survey")
                        end.position(300,350)

                        end.mousePressed(function(){
                            result.hide()
                            Result.hide()
                            ResulT.hide()
                            next.hide()
                            end.hide()

                            var es = createElement("h1")
                            es.html("End Survey")
                            es.position(20,150)

                            var END = createElement("h3")
                            END.html("Comment down below your experiance:")
                            END.position(20,250)

                            var ENd = createInput("Comments")
                            ENd.position(20,310)


                            var End = createElement("h3")
                            End.html("You have completed the survey")
                            End.position(20,270)


                        })
                    })
                })
                
            })
        })

       
    }


}
