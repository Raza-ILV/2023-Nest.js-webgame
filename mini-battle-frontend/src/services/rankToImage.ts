

export const rankToImage = (rank:string):string => {
    switch(rank){
      case "berserker":
        return "bg-berserker"
      case "thrall":
        return "bg-thrall"
      case "jarl": 
        return "bg-jarl"
      case "knight":
        return "bg-knight"
      case "oficer":
        return "bg-oficer"
      case "lord":
        return "bg-lord"
      case "swordsman":
        return "bg-swordsman"
      case "samurai":
        return "bg-samurai"
      case "shogun":
        return "bg-shogun"
      default:
        return "bg-berserker"
    }
}
